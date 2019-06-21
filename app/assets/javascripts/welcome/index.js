function changeText(element) {
  
  var btnText = document.getElementById(element.id);

switch(btnText) {
  case myBtn1:
   var dots = document.getElementById("dots1");
  var moreText = document.getElementById("more1");
    break;
  case myBtn2:
   var dots = document.getElementById("dots2");
  var moreText = document.getElementById("more2");
    break;
    case myBtn3:
   var dots = document.getElementById("dots3");
  var moreText = document.getElementById("more3");
    break;
    case myBtn4:
   var dots = document.getElementById("dots4");
  var moreText = document.getElementById("more4");
    break;

  default:
    // code block
}

  if (dots.style.display === "inline") {
    dots.style.display = "none";
    btnText.innerHTML = "Read less"; 
    moreText.style.display = "inline";
  } else {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more"; 
    moreText.style.display = "none";
  }
}


