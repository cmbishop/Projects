var express = require("express");
var app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

var campgrounds = [
        {name: "Crater Lake National Park", image: "http://www.parkcamper.com/Crater-Lake-National-Park/crater-lake-national-park.jpg"},    
        {name: "Timothy Lake", image: "https://upload.wikimedia.org/wikipedia/commons/2/2d/Timothy_Lake_(Clackamas_County,_Oregon_scenic_images)_(clacD0028).jpg"},
        {name: "Fort Stevens", image: "http://www.naturallyamazing.com/americasparks/2057.jpg"}
];

app.get("/", function(req, res){
    res.render("landing");
});

app.get("/campgrounds", function(req, res) {
    res.render("campgrounds",{campgrounds: campgrounds});
});

app.get("/campgrounds/new", function(req, res) {
   res.render("new.ejs"); 
});

app.post("/campgrounds", function(req, res){
   var name = req.body.name;
   var image = req.body.image;
   var newCampground = {name: name, image: image};
   campgrounds.push(newCampground);
   res.redirect("/campgrounds");
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("The YelpCamp server has started.");
});