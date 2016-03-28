var express = require("express");
var app = express();
var path = require("path");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var Schema = mongoose.Schema;



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

mongoose.connect('mongodb://localhost/pet_app');
mongoose.model("Pets", new Schema({"name": String, "type": String, "age": String, "image": String}));

var Pet = mongoose.model("Pets");

app.set("port",(process.env.PORT || 5000));

app.get("/pets", function(req,res){
  Pet.find({}, function(err, data){
    if(err){
      console.log(err);
    }
    res.send(data);
  });

});

app.post("/pets", function(req,res){
  console.log(req.body);

  var addedPet = new Pet({"name" : req.body.name, "type" : req.body.type, "age" : req.body.age, "image" :req.body.image});
  addedPet.save(function(err, data){
    if(err){
      console.log(err);
    }
    res.send(data);
  });

});

app.delete('/pets/:id', function(req,res){
    console.log(req.params);
    Pet.findByIdAndRemove(req.params.id, function(err, data){
        if(err) console.log(err);
        res.send(data);
    });


});

app.get("/*", function(req,res){
  var file = req.params[0] || "/views/index.html";
  res.sendFile(path.join(__dirname, "/public/", file));
});

app.listen(app.get("port"), function(){
  console.log("Listening on port: ", app.get("port"));
});

module.exports = app;
