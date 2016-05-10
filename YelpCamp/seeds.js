var mongoose = require("mongoose");
var Campground = require("./models/campground");
var Comment = require("./models/comment");

var data = [
    {
        name: "Cloud's Rest", 
        image: "http://img1.sunset.timeinc.net/sites/default/files/image/2010/05/hoodview-campground-0510-x.jpg",    
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ultricies magna id odio aliquam aliquet non sed purus. Donec vel tortor sodales, rutrum est nec, tincidunt lorem. Aliquam sodales mi bibendum risus vulputate, sit amet blandit ante imperdiet. Suspendisse mi mi, dignissim nec turpis placerat, molestie imperdiet massa. Donec tempus odio nec elit porttitor elementum. Morbi volutpat aliquet dolor, id porttitor est ultricies vitae. Vivamus posuere dolor sit amet ultrices euismod. Sed venenatis tortor eu egestas porta. Praesent convallis mi nibh. Integer semper nisl lacus, non venenatis lacus tempor sed. Sed ut ante quam. Suspendisse potenti. Sed tempus pretium laoreet. Morbi sit amet erat lacus. Maecenas ultricies blandit dui a porttitor."
    },
    {
        name: "Lost River", 
        image: "http://lostriver.com/images/swf/image6.jpg",    
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ultricies magna id odio aliquam aliquet non sed purus. Donec vel tortor sodales, rutrum est nec, tincidunt lorem. Aliquam sodales mi bibendum risus vulputate, sit amet blandit ante imperdiet. Suspendisse mi mi, dignissim nec turpis placerat, molestie imperdiet massa. Donec tempus odio nec elit porttitor elementum. Morbi volutpat aliquet dolor, id porttitor est ultricies vitae. Vivamus posuere dolor sit amet ultrices euismod. Sed venenatis tortor eu egestas porta. Praesent convallis mi nibh. Integer semper nisl lacus, non venenatis lacus tempor sed. Sed ut ante quam. Suspendisse potenti. Sed tempus pretium laoreet. Morbi sit amet erat lacus. Maecenas ultricies blandit dui a porttitor."
    },
    {
        name: "Boise National Forest", 
        image: "http://www.fs.usda.gov/Internet/FSE_MEDIA/stelprdb5043024.jpg",    
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ultricies magna id odio aliquam aliquet non sed purus. Donec vel tortor sodales, rutrum est nec, tincidunt lorem. Aliquam sodales mi bibendum risus vulputate, sit amet blandit ante imperdiet. Suspendisse mi mi, dignissim nec turpis placerat, molestie imperdiet massa. Donec tempus odio nec elit porttitor elementum. Morbi volutpat aliquet dolor, id porttitor est ultricies vitae. Vivamus posuere dolor sit amet ultrices euismod. Sed venenatis tortor eu egestas porta. Praesent convallis mi nibh. Integer semper nisl lacus, non venenatis lacus tempor sed. Sed ut ante quam. Suspendisse potenti. Sed tempus pretium laoreet. Morbi sit amet erat lacus. Maecenas ultricies blandit dui a porttitor."
    },
];

function seedDB(){
   //remove all campgrounds
   Campground.remove({}, function(err){
        if(err) {
            console.log(err);
        }
        console.log("removed campgrounds");
    }),
    //add a few campgrounds
    data.forEach(function(seed){
        Campground.create(seed, function(err, campground){
            if(err){
                console.log(err);
            } else {
                console.log("added new campground");
                //create a comment
                Comment.create(
                    {
                        text: "This place is great but I wish there was internet",
                        author: "Homer"
                    }, function(err, comment){
                        if(err){
                            console.log(err);
                        } else {
                            campground.comments.push(comment);
                            campground.save();
                            console.log("created new comment");
                        }
                    });
                }
        });
    });
    
}

module.exports = seedDB;