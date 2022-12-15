const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
var path= require("path");
let alert= require('alert');
const multer = require('multer');
const { Console } = require("console");

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './public/uploads/');
    },
    filename: function(req,file,cb){
        cb(null,file.originalname);
    }
});

const upload = multer({ storage: storage });

const app = express();

app.use(express.static('public'));

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use("/public/uploads", express.static(path.join(__dirname, "/public/uploads")));


mongoose.connect("mongodb+srv://wildlifebank:paaji9211@cluster0.9ygssxk.mongodb.net/wildlifeDB");

const entrySchema = {
  name: String,
  mobileNo: Number,
  eMail: String,
  speciesName: String,
  noOfAnimal: Number,
  spotLocation: String,
  pinCode: Number,
  state: String,
  img: Buffer,
};

const feedbackSchema={
  name:String,
  email: String,
  message: String,
}

const Feedback = mongoose.model("Feedback", feedbackSchema);

const Entry = mongoose.model("Entry", entrySchema);

app.get("/",function(req,res){
  res.sendFile("index.html", { root: "." });
  // res.sendFile("WildlifeSpot/wildlifespot.html", { root: "." });

});

app.get("/animal",function(req,res){
  res.sendFile("Animals/nilgir1.html",{ root: "." });
})

app.get("/wildlife", function (req, res) {
  res.sendFile("WildlifeSpot/wildlifespot.html", { root: "." });
});

app.get("/contact",function(req,res){
  res.sendFile("/ContactForm/contact.html",{ root: "." })
})

app.get("/quiz",function(req,res){
  res.sendFile("/Quiz/quiz.html",{ root: "." })
})

app.get("/team",function(req,res){
  res.sendFile("/Team/team.html",{ root: "." })

})

app.get("/entrydone",function(req,res){
  alert("Thanks for uploading data");
  res.redirect("/wildlife");
})

app.get("/feedbackdone",function(req,res){
  alert("Thanks for uploading data");
  res.redirect("/contact");
})


app.get("/about",function(re,res){
  res.sendFile("/About/about.html",{ root: "." })
})

app.post("/contact",function(req,res){
  console.log(req.body);
  const feedbackNew = new Feedback({
    name:req.body.name,
    email: req.body.name,
    message: req.body.message,
  })
  feedbackNew.save();
  console.log("Message recieved");
  res.redirect("/feedbackdone");
})


app.post("/wildlife",upload.single('image'), function (req, res) {
  // const pathName= req.file.path;
  console.log(req.body);
  const entryNew = new Entry({
    name: req.body.name,
    mobileNo: req.body.mobile_no,
    eMail: req.body.email,
    speciesName: req.body.specie_name,
    noOfAnimal: req.body.no_of_animals,
    spotLocation: req.body.location,
    pinCode: req.body.pincode,
    state: req.body.state,
    img: req.body.image.data,
  });
  entryNew.save();
  console.log("Entry done");
  res.redirect("/entrydone");
});

app.listen(3000, function () {
  console.log("Server started on port 3000");
});
