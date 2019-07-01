window.addEventListener("dragover",function(e){
  e = e || event;
  e.preventDefault();
},false);
window.addEventListener("drop",function(e){
  e = e || event;
  e.preventDefault();
},false);
window.addEventListener("dragleave",function(e){
  e = e || event;
  e.preventDefault();
},false);



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
                 a.setAttribute("id",file.name);
                 var button = document.createElement("button");
                 button.appendChild(a)
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
request.onload = function () {
  // Begin accessing JSON data here
  var data = JSON.parse(this.responseText)
  var  download = document.getElementById(file.name);
  download.href = data.results
    download.setAttribute("download", file.name)
  console.log(data.results)
  }


// Send request
request.send()


     return false;

 })
 }


function droppedFile(file){
 text = "name: " + file.name + + ". " + "size: " + file.size + " bytes ";
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
                 a.setAttribute("id",file.name);
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
request.onload = function () {
  var data = JSON.parse(this.responseText)
  var  download = document.getElementById(file.name);
  console.log(download)
  download.href = data.results
    download.setAttribute("download", file.name)
  console.log(data.results)
  }

request.send()
     return false;

 })
};


console.log(window.location.hash)

if (window.location.href === "http://localhost:3000/my_attachments") {
  
    console.log("chandana")
  var my_attachment =  document.getElementById("singleAttach")
  console.log(my_attachment)
  

var request = new XMLHttpRequest()


request.open('GET', "/my_attachments_data", true)
request.onload = function () {
  var data = JSON.parse(this.response)
   var imageArray =  data.results
   console.log("image array",imageArray)
imageArray.forEach(function(img) {
var imageTag = document.createElement("button");
    // imageTag.setAttribute("src", img)
   my_attachment.appendChild(imageTag)
});



  }



request.send()
   return false;

}





