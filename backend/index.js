const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const Post = require("./post.model");
const mongoose = require("mongoose");
const User = require("./user.model");
const { Server } = require("socket.io")
const http = require('http')

const app = express();
const cors = require("cors");

app.use(cors());
app.use(express.json());


const server = http.createServer(app)


const io = new Server(server, {
  cors: {
    origin: "*"
  },
});

server.listen(9000, () => console.log("Listening on port 9000..."));


const dotenv = require("dotenv");

dotenv.config();
mongoose.connect(process.env.MONGODB, (err) => {
  if (err) {
    console.log("Failed To connect to the database due to ", err);
  } else {
    console.log("Connected to the database...");
  }
});



app.get("/", (req, res) => {
  res.send("Hello, World!");
});
app.post("/register", async (req, res) => {
  const { name, password, gender } = req.body;
  let { phonenum } = req.body;
  if (name && phonenum && password && gender) {
    const hashed_pass = await bcrypt.hash(password, 10);
    phonenum = phonenum.replace("-", "");
    phonenum = phonenum.replace("(", "");
    phonenum = phonenum.replace(")", "");
    const user = new User({
      name,
      phonenum,
      password: hashed_pass,
      gender,
    });
    await user
      .save()
      .then(() => {
        res.send({
          code: "SUCCESS",
          message: "User Registered Successfully",
        });
      })
      .catch((err) => {
        res.send({
          code: "ERROR",
          message: "User Already Joined",
        });
      });
  } else {
    res.status(400).send({
      code: "ERROR",
      message: "Please fill up all of the form.",
    });
  }
});

app.post("/login", async (req, res) => {
  const { phonenum, password } = req.body;
  const user = await User.findOne({ phonenum: phonenum });
  if (user) {
    const isMatch = await bcrypt.compare(password, user.password);
    if (isMatch) {
      const token = jwt.sign({ user }, process.env.JWT_KEY);
      res.status(200).send({
        message: "Login Successful",
        status: "success",
        user: user,
        token: token,
      });
    } else {
      res.status(400).send({ message: "Invalid Password", code: "ERROR" });
    }
  } else {
    res.status(400).send({ message: "Invalid Phone Number", code: "ERROR" });
  }
});

app.post("/post", async (req, res) => {
  const { title, code } = req.body;
  const { token } = req.headers;
  const encoded = await jwt.verify(token, process.env.JWT_KEY).user;
  if (encoded) {
    await Post.create({
      title: title,
      code: code,
      creator: encoded.name
    })
      .then((post) => {
        res.status(201).send({
          code: "SUCCESS",
          message: "Post created successfully!",
          data: post,
        });

      })
      .catch((err) => {
        res.send({
          "code": "ERROR",
          "message": "Duplicated Code!"
        })
      })
  }
  else {
    res.send({
      code: "ERROR",
      message: "Invalid Token!"
    })
  }
});
app.post("/post/like", async (req, res) => {
  const { token } = req.headers;
  const { postId } = req.body;
  const encoded = await jwt.verify(token, process.env.JWT_KEY).user;
  const user = await User.findOne({ _id: encoded._id });
  const post = await Post.findOne({ _id: postId });
  if (user && post) {
    const likesIndex = post.likes.indexOf(user._id);
    const dislikeIndex = post.dislikes.indexOf(user._id);
    if (post.likes[likesIndex]) {
      const likes = post.likes.filter((_, index) => {
        return index != likesIndex;
      })
      post.likes = likes;
      await post.save();

      res.send({
        message: "Removing Like..."
      })
    } else if (post.dislikes[dislikeIndex]) {
      const dislikes = post.dislikes.filter((val, index) => {
        return index != dislikeIndex;
      })
      post.dislikes = dislikes;
      post.likes.push(user._id);
      await post.save();
      res.status(201).send({
        code: "SUCCESS",
        message: "Removed Dislike, And added Like"
      })
    }

    else {
      post.likes.push(user._id);
      await post.save();
      res.status(201).send({
        code: "SUCCESS",
        message: "Post Liked Successfuly",
      });
    }
  } else {
    console.log(encoded);
    res.send({ code: "ERROR", message: "Invalid User / Post." });
  }
});
app.post("/post/dislike", async (req, res) => {
  const { token } = req.headers;
  const { postId } = req.body;
  const encoded = await jwt.verify(token, process.env.JWT_KEY).user;
  const user = await User.findOne({ _id: encoded._id });
  const post = await Post.findOne({ _id: postId });
  if (user && post) {
    const dislikeIndex = post.dislikes.indexOf(user._id);
    const likesIndex = post.likes.indexOf(user._id);
    if (post.dislikes[dislikeIndex]) {
      const dislikes = post.dislikes.filter((val, index) => {
        return index != dislikeIndex;
      })
      post.dislikes = dislikes;
      await post.save();
      res.status(201).send({
        code: "SUCCESS",
        message: "Removed Dislike Successfully"
      })

    } else if(post.likes[likesIndex]){
      const likes = post.likes.filter((_, index) => {
        return index != likesIndex;
      })
      post.likes = likes;
      
      post.dislikes.push(user._id);
      await post.save();
      
      res.status(201).send({
        code: "SUCCESS",
        message: "Removed Like , And Added Dislike"
      })
    } 
    else {
      post.dislikes.push(user._id);
      post.save();
      res.status(201).send({
        code: "SUCCESS",
        message: "Post Disliked Successfuly",
      });
    }
  } else {
    console.log(encoded);
    res.send({ code: "ERROR", message: "Invalid User / Post." });
  }
});
app.get("/user/:name", async (req, res) => {
  const { name } = req.params;
  const user = await User.findOne({ name: name });
  const posts = await Post.find({ name })
  if (user && posts) {
    res.send({
      code: "SUCCESS",
      user,
      posts,
    })
  }
  else {
    res.send({
      code: "ERROR",
      message: "User Doesn't Have any posts"
    })
  }


})
app.get("/feed", async (req, res) => {
  const posts = await Post.find();

  posts.sort((a, b) => {
    return (
      b.likes.length / b.dislikes.length - a.likes.length / a.dislikes.length
    );
  });
  res.status(200).send({
    code: "SUCCESS",
    data: posts,
  });
});

const connection = mongoose.connection;

connection.once("open", () => {
  const postsChangeStream = connection.collection("post").watch();

  postsChangeStream.on("change", (change) => {
    switch (change.operationType) {
      case "insert":
        io.emit("newPost", change);
        console.log("new post!")
        break;
    }
  })
})

