function changeImage() {
    var menuImage = document.getElementById("menu");
    if (menuImage.src.match("images/menu-list-left.svg")) {
      menuImage.src = "images/menu-list-right.svg";
    } else if (menuImage.src.match("images/menu-list-right.svg")) {
      menuImage.src = "images/menu-list-left.svg";
    }
  }
  
  function myFunction() {
    let x = document.getElementById("hamburger-div");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }
  