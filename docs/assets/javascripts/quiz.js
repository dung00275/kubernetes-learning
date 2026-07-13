document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".quiz").forEach((quiz) => {
    const quizId = quiz.dataset.quiz;
    const result = quiz.querySelector(".quiz-result");
    const saved = localStorage.getItem(`quiz:${quizId}`);

    if (saved && result) {
      result.textContent = `Previous score: ${saved}%`;
    }

    quiz.querySelector(".quiz-submit")?.addEventListener("click", () => {
      const questions = [...quiz.querySelectorAll(".quiz-question")];
      let correct = 0;

      questions.forEach((question) => {
        const selected = question.querySelector("input:checked");
        if (selected && selected.value === question.dataset.answer) {
          correct += 1;
        }
      });

      const score = Math.round((correct / questions.length) * 100);
      localStorage.setItem(`quiz:${quizId}`, String(score));
      result.textContent = score >= 80
        ? `Score: ${score}% — Passed`
        : `Score: ${score}% — Review the concepts and try again`;
    });
  });
});
