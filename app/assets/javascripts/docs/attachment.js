window.addEventListener("dragover", function(e) {
    e = e || event;
    e.preventDefault();
}, false);
window.addEventListener("drop", function(e) {
    e = e || event;
    e.preventDefault();
}, false);
window.addEventListener("dragleave", function(e) {
    e = e || event;
    e.preventDefault();
}, false);



function dropHandler(ev) {
    console.log('File(s) dropped');
    var files = ev.dataTransfer.files
    console.log("****************")

    droppedFile(files[0])
}





function attachmentFile() {

    var photo = document.getElementById("photo");
    // the file is the first element in the files property
    var file = photo.files[0];

    var fd = new FormData();
    fd.append('file', file);
    fd.append('name', file.name);

    var xhr = new XMLHttpRequest();
    //   // // Add any event handlers here...
    xhr.open("POST", "/save_image");
    xhr.setRequestHeader("X-CSRF-TOKEN", $('meta[name="token"]').attr('content'));
    xhr.send(fd);


    //for displaying files 
    var txt = "";
    if ('files' in photo) {
        if (photo.files.length == 0) {} else {
            for (var i = 0; i < photo.files.length; i++) {
                var file = photo.files[i];
                if ('name' in file) {
                    txt += " " + " " + "name: " + file.name + ". ";
                }
                if ('size' in file) {
                    txt += "size: " + file.size + " bytes ";
                }

                var ol = document.getElementById("list");
                var li = document.createElement("li");
                var a = document.createElement("a");
                a.innerHTML = "Download";
                a.setAttribute("id", file.name);
                var button = document.createElement("button");
                button.appendChild(a);
                li.appendChild(document.createTextNode(txt));
                li.appendChild(button)
                ol.appendChild(li);


            }
            document.getElementById("dropBoxHeading").innerHTML = "";
        }
    }


    button.addEventListener("click", function() {
        // Create a request variable and assign a new XMLHttpRequest object to it.
        var request = new XMLHttpRequest()

        // Open a new connection, using the GET request on the URL endpoint
        request.open('GET', "/get_image", true)
        request.setRequestHeader("file-name", file.name);
        request.onload = function() {
            // Begin accessing JSON data here
            var data = JSON.parse(this.responseText)
            var download = document.getElementById(file.name);
            download.href = data.results
            download.setAttribute("download", file.name)
            console.log(data.results)
        }


        // Send request
        request.send()


        return false;

    })
}


function droppedFile(file) {
    text = "name: " + file.name + +". " + "size: " + file.size + " bytes ";
    var fd = new FormData();
    fd.append('file', file);
    fd.append('name', file.name);
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "/save_image");
    xhr.setRequestHeader("X-CSRF-TOKEN", $('meta[name="token"]').attr('content'));
    xhr.send(fd);
    var ol = document.getElementById("list");
    var li = document.createElement("li");
    var a = document.createElement("a");
    a.innerHTML = "Download";
    a.setAttribute("id", file.name);
    var button = document.createElement("button");
    button.appendChild(a)
    li.appendChild(document.createTextNode(text));
    li.appendChild(button)
    ol.appendChild(li);

    document.getElementById("dropBoxHeading").innerHTML = "";

    button.addEventListener("click", function() {
        var request = new XMLHttpRequest()


        request.open('GET', "/get_image", true)
        request.setRequestHeader("file-name", file.name);
        request.onload = function() {
            var data = JSON.parse(this.responseText)
            var download = document.getElementById(file.name);
            console.log(download)
            download.href = data.results
            download.setAttribute("download", file.name)
            console.log(data.results)
        }

        request.send()
        return false;

    })
}


window.onload = function() {
    if (window.location.href === "http://localhost:3000/my_attachments") {


        var myCounter = (function() {
            var counter = 0;

            // Nested anonymous function
            return function() {
                counter += 1;
                return counter;
            }
        })();


        var request = new XMLHttpRequest()
        request.open('GET', "/my_attachments_data", true)
        var some_id = document.getElementById("some_id")
        request.onload = function() {
            var data = JSON.parse(this.response)
            var imageArray = data.results
            var length = imageArray.length
            console.log("image array", imageArray)
            var count = 0;
            imageArray.forEach(function(img) {



                var colElement = document.createElement("div");
                colElement.setAttribute("class", "col-sm-3")

                var imageTag = document.createElement("img");
                var urlArray = [".jpeg", ".jpg", ".png"]
                console.log(urlArray.includes(img["extension"]))
                if (urlArray.includes(img["extension"])) {

                    imageTag.setAttribute("src", img["url"])
                    imageTag.setAttribute("class", "img-rounded");
                    imageTag.setAttribute("style", "border-radius:20px; margin:4px;");
                    colElement.appendChild(imageTag);
                    var currentCount = myCounter;


                    if (currentCount % 5 == 0) {

                        var place = "singleAttach" + currentCount;
                        var my_attachment = document.createElement("div");

                        my_attachment.setAttribute("class", "row")
                        my_attachment.setAttribute("class", place)
                        my_attachment.appendChild(colElement);
                        some_id.appendChild(my_attachment);
                    } else {
                        if (currentCount % 5 == 0) {
                            count += 1;
                        }
                        var className = "singleAttach" + count;

                        var my_attachment = document.getElementById(className)
                        my_attachment.appendChild(colElement);
                    }

                }                   









            });

        }
        request.send()
        return false;
    }
}





// function resizeImages()
//   {
//     var desiredTotalWidth = $container.width(),

//       $images = $('img', $container),
//       numImages = $images.length,

//       numPadding = numImages - 1,

//       // calculate padding based on percentage
//       //totalPadding = numPadding * desiredTotalWidth * 0.02,

//       // calculate padding based on pixels
//       totalPadding = numPadding * 10,

//       // find the desired total image width
//       desiredTotalImageWidth = desiredTotalWidth - totalPadding,

//       totalAspect = 0.0;

//     // grab the sum of the aspect ratios of the images
//     $images.each(function() {
//       var $image = $(this),
//           aspect = $image.width() / $image.height();
//       $image.data('aspect', aspect);
//       totalAspect += aspect;
//     });

//     // find the desired image height
//     var constantImageHeight = desiredTotalImageWidth / totalAspect;

//     // set the width of each image appropriately
//     $images.each(function() {
//       var $image = $(this),
//           aspect = $image.data('aspect');
//       $image.css('width', aspect * constantImageHeight);
//     });
//   }

//   $container.imagesLoaded()
//     .always(resizeImages);

//   $(window).resize(resizeImages);
// });