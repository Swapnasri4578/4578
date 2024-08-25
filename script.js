function generateRandomNumber() {
    const randomNumber = Math.floor(Math.random() * 100) + 1; // Generates a random number between 1 and 100
    document.getElementById("randomNumber").innerText = `Random Number: ${randomNumber}`;
}
