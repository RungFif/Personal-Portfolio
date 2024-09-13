// Modal functionality
function openModal(projectId) {
  document.getElementById(projectId + "-modal").style.display = "block";
}

function closeModal(projectId) {
  document.getElementById(projectId + "-modal").style.display = "none";
}

// Sticky Navbar
window.onscroll = function () {
  var header = document.querySelector("header");
  var sticky = header.offsetTop;

  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
};
