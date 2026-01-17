// ===== USER ACTIONS =====
function addOrder(plant){
  let orders = JSON.parse(localStorage.getItem("orders")) || [];
  orders.push({ plant, date:new Date().toLocaleString() });
  localStorage.setItem("orders", JSON.stringify(orders));
  alert("Order Added!");
}

function addFavorite(plant){
  let fav = JSON.parse(localStorage.getItem("favorites")) || [];
  fav.push({ plant });
  localStorage.setItem("favorites", JSON.stringify(fav));
  alert("Added to Favorites!");
}

function setReminder(){
  let plant = document.getElementById("plantName").value;
  let reminders = JSON.parse(localStorage.getItem("reminders")) || [];
  reminders.push({ plant, status:"Pending" });
  localStorage.setItem("reminders", JSON.stringify(reminders));
  alert("Reminder Set!");
}

// ===== ADMIN VIEW =====
function showSection(id){
  document.querySelectorAll('.card').forEach(c=>c.style.display='none');
  document.getElementById(id).style.display='block';
}

function loadAdminData(){
  // Orders
  let orders = JSON.parse(localStorage.getItem("orders")) || [];
  let oTable = "<tr><th>Plant</th><th>Date</th></tr>";
  orders.forEach(o=>{
    oTable += `<tr><td>${o.plant}</td><td>${o.date}</td></tr>`;
  });
  document.getElementById("orderTable").innerHTML=oTable;

  // Favorites
  let fav = JSON.parse(localStorage.getItem("favorites")) || [];
  let fTable = "<tr><th>Plant</th></tr>";
  fav.forEach(f=>{
    fTable += `<tr><td>${f.plant}</td></tr>`;
  });
  document.getElementById("favTable").innerHTML=fTable;

  // Reminders
  let r = JSON.parse(localStorage.getItem("reminders")) || [];
  let rTable = "<tr><th>Plant</th><th>Status</th></tr>";
  r.forEach(x=>{
    rTable += `<tr><td>${x.plant}</td><td>${x.status}</td></tr>`;
  });
  document.getElementById("reminderTable").innerHTML=rTable;
}

if(location.pathname.includes("admin")){
  loadAdminData();
}
function loadOrders() {
  const orders = JSON.parse(localStorage.getItem("orders")) || [];
  const table = document.getElementById("orderTable");
  table.innerHTML = "";

  orders.forEach((o, i) => {
    table.innerHTML += `
      <tr>
        <td>${o.plant}</td>
        <td>₹${o.price}</td>
        <td>${o.user}</td>
        <td>${o.status}</td>
        <td>
          <button onclick="approveOrder(${i})">Approve</button>
          <button onclick="rejectOrder(${i})" class="danger">Reject</button>
        </td>
      </tr>
    `;
  });
}

function approveOrder(i) {
  let orders = JSON.parse(localStorage.getItem("orders"));
  orders[i].status = "Approved";
  localStorage.setItem("orders", JSON.stringify(orders));
  loadOrders();
}

function rejectOrder(i) {
  let orders = JSON.parse(localStorage.getItem("orders"));
  orders[i].status = "Rejected";
  localStorage.setItem("orders", JSON.stringify(orders));
  loadOrders();
}

function showSection(id) {
  document.querySelectorAll(".dashboard section")
    .forEach(sec => sec.style.display = "none");
  document.getElementById(id).style.display = "block";
}
function checkLogin(action){
  if(!localStorage.getItem("loggedUser")){
    alert("Please login first");
    window.location.href="login.html";
    return false;
  }
  return true;
}
function addToCart(plant, price) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.push({ plant, price, date: new Date().toLocaleString() });
  localStorage.setItem("cart", JSON.stringify(cart));

  // Show success message
  const msg = document.getElementById("cartSuccessMsg");
  msg.style.display = "block";

  // Auto-hide after 3 seconds
  setTimeout(() => {
    msg.style.display = "none";
  }, 3000);
}

function openWeather(){
  window.location.href = "weather.html";
}

