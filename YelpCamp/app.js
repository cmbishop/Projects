var express = require("express");
var app = express();

app.set("view engine", "ejs");

app.get("/", function(req, res){
    res.render("landing");
});

app.get("/campgrounds", function(req, res) {
    var campgrounds = [
        {name: "Crater Lake National Park", image: "http://www.parkcamper.com/Crater-Lake-National-Park/crater-lake-national-park.jpg"},    
        {name: "Timothy Lake", image: "https://upload.wikimedia.org/wikipedia/commons/2/2d/Timothy_Lake_(Clackamas_County,_Oregon_scenic_images)_(clacD0028).jpg"},
        {name: "Fort Stevens", image: "http://www.naturallyamazing.com/americasparks/2057.jpg"}
    ]
    
    res.render("campgrounds",{campgrounds: campgrounds});
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("The YelpCamp server has started.");
});