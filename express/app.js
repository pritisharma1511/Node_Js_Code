import express from "express";
import path from "path";

const app = express();
const PORT = process.env.PORT || 3000;

// app.get("/", (req, res) => res.send("hello world !"));
// app.get("/about", (req, res) => res.send("hello about page !"));

// app.get("/product", (req, res) => {
//   console.log(req.query);
//   res.send(`<h1> user search for product ${req.query.search} mobile<h1>`);
// });


const staticPath = path.join(import.meta.dirname,"public");

app.use(express.static(staticPath));

app.use(express.urlencoded());

app.post("/contact",(req,res) => {
     console.log(req.body);
     res.redirect("/");
});





app.listen(PORT, () => {
  console.log(`server is running at port : ${PORT}`);
});
