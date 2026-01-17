const API_KEY = "YOUR_PLANTNET_API_KEY";

function identifyPlant(){
  const image = document.getElementById("imageInput").files[0];
  if(!image) return alert("Upload image");

  let formData = new FormData();
  formData.append("images", image);
  formData.append("organs", "leaf");

  fetch(`https://my-api.plantnet.org/v2/identify/all?api-key=${API_KEY}`,{
    method:"POST",
    body:formData
  })
  .then(res=>res.json())
  .then(data=>{
    const plant = data.results[0];
    document.getElementById("result").innerHTML = `
      <h3>${plant.species.scientificName}</h3>
      <p>Confidence: ${(plant.score*100).toFixed(2)}%</p>
      <p>🌿 Care Tip: Moderate water & indirect sunlight</p>
    `;
  });
}
