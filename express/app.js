import express from "express"

const app = express();

app.get("/",(req,res) => res.send("hello world !"));
app.get("/about",(req,res) => res.send("hello about page !"));

const PORT = process.env.PORT || 3000;
app.listen(PORT,() => {
     console.log(`server is running at port : ${PORT}`);

});