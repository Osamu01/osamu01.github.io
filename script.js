document.getElementById('factButton').addEventListener('click', function() {
    const facts = [
        "Fact 1: Ghosts are considered to be spirits of the dead.",
        "Fact 2: The concept of ghosts exists in numerous cultures worldwide.",
        "Fact 3: Some people use electronic devices to try to communicate with ghosts.",
        // Add more facts as desired
    ];

    const factText = document.getElementById('factText');
    const randomFact = facts[Math.floor(Math.random() * facts.length)];
    factText.textContent = randomFact;
});
