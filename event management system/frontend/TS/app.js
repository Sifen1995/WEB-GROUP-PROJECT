document.addEventListener('DOMContentLoaded', function (event) {
    var modal = document.getElementById("reservationModal");
    var btn = document.querySelector(".reserveBtn");
    var span = document.getElementsByClassName("close")[0];
    btn.onclick = function () {
        modal.style.display = "block";
    };
    span.onclick = function () {
        modal.style.display = "none";
    };
    window.onclick = function (event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    };
});
// Get the modal
var modal = document.getElementById("eventModal");
// Get the button that opens the modal
var btn = document.getElementById("addEventBtn");
// Get the <span> element that closes the modal
var closeBtn = document.querySelector(".close");
// Get the form
var eventForm = document.getElementById("eventForm");
// Show modal when "Add New Event" button is clicked
btn.onclick = function () {
    modal.style.display = "block";
};
// Close modal when "X" is clicked
closeBtn.onclick = function () {
    modal.style.display = "none";
};
// Close modal when clicking outside of it
window.onclick = function (event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
};
// Handle form submission
eventForm.onsubmit = function (e) {
    e.preventDefault();
    // Add logic to handle form data (e.g., save event details)
    alert("Event Created Successfully!");
    // Clear form inputs
    eventForm.elements.namedItem("eventName").value = "";
    eventForm.elements.namedItem("organizer").value = "";
    eventForm.elements.namedItem("eventDate").value = "";
    eventForm.elements.namedItem("category").value = "";
    // Close modal
    modal.style.display = "none";
};
