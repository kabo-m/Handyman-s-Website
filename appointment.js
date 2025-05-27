document.getElementById("appointmentForm").addEventListener("submit", function(event) {
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const date = document.getElementById("date").value.trim();
    const time = document.getElementById("time").value.trim();
    const service = document.getElementById("service").value.trim();

    if (name === "" || email === "" || date === "" || time === "" || service === "") {
        alert("Please fill out all required fields.");
        event.preventDefault();
    }
});
