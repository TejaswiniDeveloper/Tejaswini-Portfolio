const toggleBtn = document.getElementById("theme-toggle");

// default
if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark");
} else {
    document.body.classList.add("light");
}

toggleBtn.addEventListener("click", () => {
    if (document.body.classList.contains("light")) {
        document.body.classList.replace("light", "dark");
        toggleBtn.textContent = "☀️";
        localStorage.setItem("theme", "dark");
    } else {
        document.body.classList.replace("dark", "light");
        toggleBtn.textContent = "🌙";
        localStorage.setItem("theme", "light");
    }
});