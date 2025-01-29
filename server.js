const http = require("http");
const fsPromises = require("fs/promises")
const server= http.createServer(async(req, res) => {
        if (req.url=="/") {
            const data =await fsPromises.readFile("./homepage.html")
            res.end(data)
            // res.end("<h1 style='color:red'> Hello </h1>")
        }
        else if (req.url=="/about")
        {   const data =await fsPromises.readFile("./about.html") 
            res.end(data)
        }
        else {
            const data= await fsPromises.readFile("./error.html")
            res.end(data)
        }
    });
server.listen(1903);
