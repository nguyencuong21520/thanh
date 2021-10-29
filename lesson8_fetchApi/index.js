// fetch('https://api.openweathermap.org/data/2.5/weather?q=hanoi&appid=7674da634845e7c2d8c53ab0a48b8e29')
//   .then(response => response.json())
//   .then(data => console.log(data));

// async function getData(city) {
//   let DrawData = await fetch(
//     `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=7674da634845e7c2d8c53ab0a48b8e29`
//   );
//   let data = await DrawData.json();
//   render(data)
// }
// getData("Thailand");

// function render(data) {
//   let domWeater = document.querySelector(".container");
//   let html = `<div class="card">
//       <h1>${data.main.temp}</h1>
//       <p>${data.weather[0].description}</p>
//   </div>`;

//   domWeater.innerHTML = html;
// }

async function getData() {
  let drawData = await fetch("https://static.pipezero.com/covid/data.json")
  let data = await drawData.json();
  console.log(data);
}


getData()