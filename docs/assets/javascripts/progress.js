document.addEventListener("DOMContentLoaded", () => {
  const key = "kubernetes-learning-progress";
  const allPractices = [
    "beginner-01",
    "beginner-02",
    "beginner-03",
    "troubleshooting-01"
  ];

  const readProgress = () => {
    try {
      return JSON.parse(localStorage.getItem(key)) || {};
    } catch {
      return {};
    }
  };

  const saveProgress = (progress) => {
    localStorage.setItem(key, JSON.stringify(progress));
  };

  const updateDashboard = () => {
    const progress = readProgress();
    const completed = allPractices.filter((id) => progress[id]).length;
    const percent = Math.round((completed / allPractices.length) * 100);
    const bar = document.getElementById("global-progress-bar");
    const text = document.getElementById("global-progress-text");
    if (bar) bar.style.width = `${percent}%`;
    if (text) text.textContent = `${completed} of ${allPractices.length} practices completed (${percent}%)`;
  };

  document.querySelectorAll(".practice-complete").forEach((button) => {
    const id = button.dataset.practice;
    const progress = readProgress();

    if (progress[id]) {
      button.classList.add("completed");
      button.textContent = "Completed ✓";
    }

    button.addEventListener("click", () => {
      const current = readProgress();
      current[id] = !current[id];
      saveProgress(current);
      button.classList.toggle("completed", current[id]);
      button.textContent = current[id] ? "Completed ✓" : "Mark practice complete";
      updateDashboard();
    });
  });

  updateDashboard();
});
