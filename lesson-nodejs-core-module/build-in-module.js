const fs = require("fs");
const http = require("http");

fs.readFile("./data.txt", "utf-8", (err, data) => {
  if (!err) {
    const dataList = data.split("\n");
    const studentData = dataList.map((dataItem) => dataItem.split(","));
    // console.log(studentData);
  }
});

const server = http.createServer((req, res) => {
  console.log("New request is coming!");

  fs.readFile("./index.html", "utf-8", (err, data) => {
    if (!err) {
      res.writeHead(200, { "content-type": "text/html" });
      res.write(data);
      res.end();
    }
  });
});

const PORT = 5050;
server.listen(PORT, () => {
  console.log(`Server is running at PORT ${PORT}`);
});
