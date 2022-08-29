const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const Post = require("./post.model");
const mongoose = require("mongoose");
const User = require("./user.model");

const prettier = require("prettier");

const dotenv = require("dotenv");
const cors = require("cors");
dotenv.config();
mongoose.connect(process.env.MONGODB, (err) => {
  if (err) {
    console.log("Failed To connect to the database due to ", err);
  } else {
    console.log("Connected to the database...");
  }
});

const app = express();
app.use(cors());
app.use(express.json());

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
  const formatted = prettier.format(code, {
    semi: true,
    parser: "babel",
  });
  formatted.replace('"', '"');

  const post = Post.create({
    title: title,
    code: formatted,
  })
    .then((post) => {
      res.status(201).send({
        code: "SUCCESS",
        message: "Post created successfully!",
        data: post,
      });
      console.log(formatted);
    })
    .catch((err) => {
      res.status(400).send({ code: "ERROR", message: "Duplicated Code." });
      console.log(err);
    });
});
app.post("/post/like", async (req, res) => {
  const { token } = req.headers;
  const { postId } = req.body;
  const encoded = await jwt.verify(token, process.env.JWT_KEY).user;
  const user = await User.findOne({ _id: encoded._id });
  const post = await Post.findOne({ _id: postId });
  if (user && post) {
    const likesIndex = post.likes.indexOf(user._id);
    if (post.likes[likesIndex]) {
      res.status(400).send({
        code: "ERROR",
        message: "Post Already Liked!",
      });
    } else {
      post.likes.push(user._id);
      post.save();
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
    if (post.dislikes[dislikeIndex]) {
      res.status(400).send({
        code: "ERROR",
        message: "Post Already Disliked!",
      });
    } else {
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
app.listen(9000, () => console.log("Listening on port 9000..."));
