// Simulare simplă pentru logarea utilizatorilor
document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const userName = event.target[0].value;
    const password = event.target[1].value;

    // Simulare verificare utilizator
    if (userName === "user" && password === "password") {
        document.getElementById("loginMessage").innerText = `Bine ai venit, ${userName}!`;
    } else {
        document.getElementById("loginMessage").innerText = "Nume utilizator sau parolă incorecte.";
    }
});
