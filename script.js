
// Basic Form Validation (can be expanded)
document.querySelector("form").addEventListener("submit", function(event) {
    event.preventDefault();  // Prevent page reload on form submission

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    if (name && email && message) {
        alert("Thank you for reaching out, " + name + "!");
        // Here you can also send form data to a server or email service
    } else {
        alert("Please fill out all fields.");
    }
});
