function loadCharts(){
 let orders = JSON.parse(localStorage.getItem("orders")) || [];
 let fav = JSON.parse(localStorage.getItem("favorites")) || [];

 new Chart(document.getElementById("orderChart"),{
  type:'bar',
  data:{
   labels:['Orders','Favorites'],
   datasets:[{
     data:[orders.length,fav.length]
   }]
  }
 });
}
