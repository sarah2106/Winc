const toggleNavVisibility = function() {
  const navigation = document.querySelector(".nav-sidebar");
  navigation.classList.toggle("hidden");
}

  const colorButtons = document.querySelectorAll("li");
  colorButtons.forEach(function(colorButton) {
    colorButton.addEventListener("click", changeBackgroundColor);
    colorButton.addEventListener("click", toggleNavVisibility);
  });
};
const changeBackgroundColor = function(event) {
  const color = event.target.className;
  document.body.style.backgroundColor = color;
};

document.addEventListener("DOMContentLoaded", function() {
 
  const toggleNavVisibilityButton = document.querySelector(".btn-toggle-nav");
  toggleNavVisibilityButton.addEventListener("click", toggleNavVisibility);

 

  
});
