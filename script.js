// JavaScript function that shows an alert
function displayAlert() {
    alert('Hello! You clicked the button.');
}

function toggleAnswer(element) {
    var answer = element.nextElementSibling;
    if (answer.style.display === "none") {
        answer.style.display = "block";
    } else {
        answer.style.display = "none";
    }
}

function toggleVisibility(elementId) {
    var element = document.getElementById(elementId);
    if (element.style.display === "none") {
        element.style.display = "block";  // Show the element
    } else {
        element.style.display = "none";   // Hide the element
    }
}
