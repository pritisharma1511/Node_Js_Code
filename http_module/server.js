const http = require ("http");

const server = http.createServer((req,res) =>{
    if(req.url === "/"){
        res.write("i am vinod bahader thapa aka thapa techical");
}
res.end()
});

const PORT = 3000;
server.listen(PORT,() =>{
    console.log (`listineng on PORT ${PORT}`);

});
