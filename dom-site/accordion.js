
function toggleAccordion(e) {
  
  e.classList.toggle("active");
  
  var panel = e.nextElementSibling;
  panel.classList.toggle("active");
}