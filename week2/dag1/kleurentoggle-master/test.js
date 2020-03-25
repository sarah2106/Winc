
let toggleNavVisibility = function() {
  let navigation = document.querySelector(".nav-sidebar");
  navigation.classList.toggle("hidden");
};
let changeBackgroundColor = function(event) {
  let color = event.target.className;
  document.body.style.backgroundColor = color;
};

document.addEventListener("DOMContentLoaded", function() {
 
  let toggleNavVisibilityButton = document.querySelector(".btn-toggle-nav");
  toggleNavVisibilityButton.addEventListener("click", toggleNavVisibility);

  let  colorButtons = document.querySelectorAll("li");
  colorButtons.forEach(function(colorButton) {
    colorButton.addEventListener("click", changeBackgroundColor);
    colorButton.addEventListener("click", toggleNavVisibility);
  });

  
});
