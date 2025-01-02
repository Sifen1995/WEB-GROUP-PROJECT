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
