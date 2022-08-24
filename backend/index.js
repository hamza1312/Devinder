const express = require("express");
const bcrypt = require("bcrypt");
const jwt =require("jsonwebtoken");
const mongoose = require("mongoose");
const User = require('./user.model')
const prettier = require("prettier");
const dotenv = require("dotenv")
dotenv.config();
mongoose.connect(process.env.MONGODB, (err) => {
    if (err) {
        console.log("Failed To connect to the database due to ", err)
    }
    else {
        console.log("Connected to the database...")
    }
})

const app = express();

app.use(express.json())

app.get("/", (req, res) => {
    res.send("Hello, World!");
})
app.post("/register", async (req, res) => {
    const { name, phonenum,code, password, gender } = req.body;

    if (name && phonenum  && code && password && gender) {
        const hashed_pass = await bcrypt.hash(password, 10);
        const user = new User({
            name,
            phonenum,
            password:hashed_pass,
            gender,
            code
            
        })
        await user.save().then(() => {
            res.send({
                code: "SUCCESS",
                message: "User Registered Successfully"
            })
        }).catch((err) => {
            res.send({
                code: "ERROR",
                message: "User Already Joined"
            })

        })

    }

    else {
        res.status(400).send({
            code: "ERROR",
            message: "Please fill up all of the form."
        })
    }
})

app.post("/login", async(req, res) => {
    const { phonenum, password } = req.body;
    const user = await User.findOne({ phonenum:phonenum });
    if(user){
        const isMatch = await bcrypt.compare(password, user.password);
        if(isMatch){
            const token = jwt.sign(
                { user },
               process.env.JWT_KEY
            )
            res.status(200).send({"message": "Login Successful", "status": "success", "user": user, "token": token});
        }
        else{
            res.status(400).send({"message": "Invalid Password", "status": "error"});
        }
    }
    else{
        res.status(400).send({"message": "Invalid Username", "status": "error"});
    }
}
);


app.listen(9000, () => console.log("Listening on port 9000..."));
