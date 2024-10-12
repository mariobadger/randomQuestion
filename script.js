document.addEventListener("DOMContentLoaded", function () {
    const questions = [
        
    ];

    function getRandomQuestion() {
        const randomIndex = Math.floor(Math.random() * questions.length);
        return questions[randomIndex];
    }

    const questionBox = document.getElementById("question-box");
    questionBox.textContent = getRandomQuestion();

    const calmColors = [
        "#E3F2FD", // light blue
        "#FFEBEE", // soft pink
        "#E8F5E9", // soft green
        "#FFF3E0", // light orange
        "#F3E5F5", // lavender
        "#E0F7FA", // light cyan
        "#FFFDE7"  // pale yellow
    ];

    function getRandomBackgroundColor() {
        const randomIndex = Math.floor(Math.random() * calmColors.length);
        return calmColors[randomIndex];
    }

    document.body.style.backgroundColor = getRandomBackgroundColor();
});
