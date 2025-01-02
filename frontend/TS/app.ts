document.addEventListener('DOMContentLoaded', (event: Event) => {
    const modal = document.getElementById("reservationModal") as HTMLElement;
    const btn = document.querySelector(".reserveBtn") as HTMLButtonElement;
    const span = document.getElementsByClassName("close")[0] as HTMLElement;

    btn.onclick = function() {
        modal.style.display = "block";
    }

    span.onclick = function() {
        modal.style.display = "none";
    }

    window.onclick = function(event: MouseEvent) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    }
});
