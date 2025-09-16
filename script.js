document.getElementById("loginForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();
    const role = document.querySelector('input[name="role"]:checked').value;

    if (username === "" || password === "") {
        alert("Please enter both username and password!");
        return;
    }

    // 🔹 For now, simple redirect simulation
    if (role === "candidate") {
        window.location.href = "student.html";
    } else if (role === "admin") {
        window.location.href = "admin.html";
    }
});
