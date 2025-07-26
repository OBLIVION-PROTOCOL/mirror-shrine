// Track page visits using localStorage
const pageKey = window.location.pathname;

function updateVisitedPages() {
  let visited = JSON.parse(localStorage.getItem("visitedPages") || "[]");
  if (!visited.includes(pageKey)) {
    visited.push(pageKey);
    localStorage.setItem("visitedPages", JSON.stringify(visited));
  }

  // Display unlocked message if 3+ pages visited
  if (visited.length >= 3) {
    const unlockNotice = document.createElement("p");
    unlockNotice.innerText = "🗝️ Fragment Unlocked: You may now access the Hidden Scroll.";
    document.body.appendChild(unlockNotice);
  }
}

window.onload = updateVisitedPages;
