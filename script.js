document.addEventListener("DOMContentLoaded", () => {
  const passwordInput = document.getElementById("password");
  const strengthMeter = document.getElementById("strengthMeter");
  const feedback = document.getElementById("feedback");

  passwordInput.addEventListener("input", () => {
    const password = passwordInput.value;
    const { strength, className, message } = evaluateStrength(password);

    updateStrengthBar(strength, className);
    feedback.textContent = message;
  });

  function evaluateStrength(password) {
    let score = 0;
    let className = "";
    let message = "";

    if (password.length >= 8) score++;
    if (/[a-z]/.test(password)) score++;
    if (/[A-Z]/.test(password)) score++;
    if (/\d/.test(password)) score++;
    if (/[\W_]/.test(password)) score++;

    switch (score) {
      case 0:
        message = "";
        break;
      case 1:
      case 2:
        className = "weak";
        message = "Too weak. Try adding uppercase, numbers, and symbols.";
        break;
      case 3:
        className = "medium";
        message = "Medium strength. Add more variety for a strong password.";
        break;
      case 4:
        className = "strong";
        message = "Strong password! ✅";
        break;
      case 5:
        className = "very-strong";
        message = "Very strong password! 💪";
        break;
    }

    return {
      strength: (score / 5) * 100,
      className,
      message,
    };
  }

  function updateStrengthBar(strength, className) {
    strengthMeter.innerHTML = ""; // Clear previous fill
    const fill = document.createElement("div");
    fill.classList.add("strength-meter-fill", className);
    fill.style.width = `${strength}%`;
    strengthMeter.appendChild(fill);
  }
});
