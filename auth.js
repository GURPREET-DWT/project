<script>
// USER DATA (optional demo accounts)
const users = [
  { email: "admin@growhappy.com", password: "admin123", role: "admin" },
  { email: "user@growhappy.com", password: "user123", role: "user" }
];

/* ---------------- LOGIN ---------------- */
function login() {
const email = document.getElementById("email").value.trim();
const password = document.getElementById("password").value.trim();

  const user = users.find(u => u.email === email && u.password === password);

  if (!user) {
    alert("Invalid ID or Password");
    return;
  }
<script>
const users = [
  { email: "admin@growhappy.com", password: "admin123", role: "admin" },
  { email: "user@growhappy.com", password: "user123", role: "user" }
];

function login() {
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  const user = users.find(u => u.email === email && u.password === password);

  if (!user) {
    alert("Invalid ID or Password");
    return;
  }

  localStorage.setItem("loggedUser", JSON.stringify(user));

  if (user.role === "admin") {
    window.location.href = "admin.html";
  } else {
    window.location.href = "index.html";
  }
}

function logout() {
  localStorage.removeItem("loggedUser");
  window.location.href = "index.html";
}

function updateNavbar() {
  const user = JSON.parse(localStorage.getItem("loggedUser"));

  const loginBtn = document.getElementById("loginBtn");
  const logoutBtn = document.getElementById("logoutBtn");

  if (!loginBtn || !logoutBtn) return;

  loginBtn.style.display = user ? "none" : "inline-block";
  logoutBtn.style.display = user ? "inline-block" : "none";
}

window.onload = updateNavbar;

function buyPlant(name, price) {
  const orders = JSON.parse(localStorage.getItem("orders")) || [];

  orders.push({
    plant: name,
    price: price,
    user: "user",
    status: "Pending"
  });

  localStorage.setItem("orders", JSON.stringify(orders));
  alert("Plant purchase request sent!");
}

// Admin protection
if (window.location.pathname.includes("admin.html")) {
  const user = JSON.parse(localStorage.getItem("loggedUser"));

  if (!user || user.role !== "admin") {
    alert("Admin access only");
    window.location.href = "login.html";
  }
}
</script>

  // Save login
  localStorage.setItem("loggedUser", JSON.stringify(user));

  // Redirect based on role
  if (user.role === "admin") {
    window.location.href = "admin.html";
  } else {
    window.location.href = "index.html";
  }
}

/* ---------------- LOGOUT ---------------- */
function logout() {
  localStorage.removeItem("loggedUser");
  window.location.href = "index.html";
}

/* ---------------- NAVBAR STATE ---------------- */
function updateNavbar() {
  const user = JSON.parse(localStorage.getItem("loggedUser"));

  const loginBtn = document.getElementById("loginBtn");
  const logoutBtn = document.getElementById("logoutBtn");

  if (!loginBtn || !logoutBtn) return;

  loginBtn.style.display = user ? "none" : "inline-block";
  logoutBtn.style.display = user ? "inline-block" : "none";
}


/* ---------------- BUY PLANT ---------------- */
function buyPlant(name, price) {
  const orders = JSON.parse(localStorage.getItem("orders")) || [];

  orders.push({
    plant: name,
    price: price,
    user: "user",
    status: "Pending"
  });

  localStorage.setItem("orders", JSON.stringify(orders));
  alert("Plant purchase request sent!");
}

/* -------------- IMPORTANT CHANGE --------------
   ↓↓↓   NO PAGE FORCE REDIRECTION   ↓↓↓
   LOGIN IS NOW ONLY WHEN CLICKED
-------------------------------------------------*/

// ❌ removed login auto redirect
// ❌ removed index protection
// ❌ removed ai page protection

</script>
