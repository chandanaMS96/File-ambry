function attachmentFile() {
    var x = document.getElementById("myFile");
    var txt = "";
    if ('files' in x) {
        if (x.files.length == 0) {
        } else {
            for (var i = 0; i < x.files.length; i++) {
                var file = x.files[i];
                if ('name' in file) {
                    txt += " " + " " +"name: " + file.name ;
                }
                if ('size' in file) {
                    txt +=  " " + " " +"size: " +  file.size + " bytes ";
                }

                var ol = document.getElementById("list");
                 var li = document.createElement("li");
                 li.appendChild(document.createTextNode(txt));
                ol.appendChild(li);


            }
         document.getElementById("dropBoxHeading").innerHTML = "";

        }
    }
  }