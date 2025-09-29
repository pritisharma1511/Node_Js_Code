import { createServer } from "http";

const server = createServer(async ( req,res) => {
    if(req.method ==="GET") {
        if (req.url === "/"){
            try{
                const data = await readFile(path.join("public","index.html"));
                res.writeHead(200,{"Content-Type" : "text/html"});
                res.end(data);
          }catch (error){
            res.writeHead(404,{"content=Type":"text/html"});
            res.end("404 page not found")
          }
        }
    }
});
