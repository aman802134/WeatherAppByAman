let searchInput = document.getElementById("search");
let searchBtn = document.getElementById("searchBtn");
let locationErr = document.getElementById("locationErr");
let locationErr2 = document.getElementById("locationErr2");
let cityName = document.getElementById("City");
let Temperature = document.getElementById("Temperature")
let Clarity = document.getElementById("Clarity")
let Humidity = document.getElementById("Humidity");
let windSpeed = document.getElementById("WindSpeed");

// let key =` 0de64a33ee2a6cf673cca73116c4e010`

searchBtn.addEventListener("click",(e)=>{
    e.preventDefault();
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${searchInput.value}&appid=0de64a33ee2a6cf673cca73116c4e010`
    let fetchData = fetch(url)
    fetchData.then((response)=> response.json()).then((data)=>{
        if(!searchInput.value){
            locationErr.style.display = "block";
        }

        if(!data){
            locationErr2.style.display = "block";
        }else{
            cityName.textContent = data.name;
            Temperature.textContent = ( data.main.temp - 273.15).toPrecision(4);
            Clarity.textContent = data.weather[0].description;
            Humidity.textContent = data.main.humidity;
            windSpeed.textContent = data.wind.speed;
        }
}).catch((err)=>{
    console.log(err);
});
});
