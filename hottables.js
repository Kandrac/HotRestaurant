var express = require("express");
var path = require("path");

var app = express();
var PORT = 3000;


app.use(express.urlencoded({ extended:true}));
app.use(express.json);

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "home.html"));
  });
  app.get("/tables", function(req, res) {
    res.sendFile(path.join(__dirname, "tables.html"));
  });
  app.get("/reserve", function(req, res) {
    res.sendFile(path.join(__dirname, "reserve.html"));
  });
  app.get("/api/tables", function(req,res){
      return res.json(tableData)
  })

var tableData = [
    {
        customerName: "your name",
        customerEmail: "johnsmith@gmail.com",
        CustmomerPhonenumber: "(123)456-7890",
        CustomerId: "873"
    }
];



app.listen(PORT, function(){
    console.log("App listening on PORT " + PORT);
});
