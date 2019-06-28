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
                     txt += " " + " " + "name: " + file.name;
                 }
                 if ('size' in file) {
                     txt += " " + " " + "size: " + file.size + " bytes ";
                 }

                 var ol = document.getElementById("list");
                 var li = document.createElement("li");
                 var button = document.createElement("button");
                 button.innerHTML = "Download";
                 li.appendChild(document.createTextNode(txt));
                 li.appendChild(button)
                 ol.appendChild(li);


             }
             document.getElementById("dropBoxHeading").innerHTML = "";
         }
     }


     button.addEventListener("click", function() {
         var xhr1 = new XMLHttpRequest();
         // Add any event handlers here...

         xhr1.open("GET", "/get_image");
         xhr1.send();
         //  var response = xhr1.response;
         // console.log( response);
     });


     return false;

 }