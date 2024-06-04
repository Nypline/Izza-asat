function changeImage() {
  var menuImage = document.getElementById("menu");
  if (menuImage.src.match("menu-list-right.svg")) {
    menuImage.src = "Picture/menu-list-left.svg";
  } else if (menuImage.src.match("Picture/menu-list-left.svg")) {
    menuImage.src = "Picture/menu-list-right.svg";
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
