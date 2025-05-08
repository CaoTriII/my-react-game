// src/fireworks.js
export default function fireworks(element) {
    const firework = document.createElement("div");
    firework.className = "firework";
    firework.innerHTML = "🎉";
    element.appendChild(firework);
  
    setTimeout(() => {
      element.removeChild(firework);
    }, 800);
  }
  