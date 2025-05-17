console.log("Let'a Write JavaScript!")

let cityName = document.getElementById("cityName")
let Name = document.getElementById("Name")
let temp = document.getElementById("temp")
let sky = document.getElementById("sky")
let maxTemp = document.getElementById("maxTemp")
let minTemp = document.getElementById("minTemp")
let latitude = document.getElementById("latitude")
let longitude = document.getElementById("longitude")
let wind = document.getElementById("wind")
let feelsLike = document.getElementById("feelsLike")


function convertToDMS(deg, isLat = true) {
  const absolute = Math.abs(deg);
  const degrees = Math.floor(absolute);
  const minutesNotTruncated = (absolute - degrees) * 60;
  const minutes = Math.floor(minutesNotTruncated);
  const seconds = Math.round((minutesNotTruncated - minutes) * 60);

  const direction = deg >= 0
    ? (isLat ? " N" : " E")
    : (isLat ? " S" : " W");

  return `${degrees}°${minutes}'${seconds}"${direction}`;
}

async function getweatherInformation(id){
const a = await fetch(`https://api.openweathermap.org/data/2.5/weather?id=${id}&appid=e00c489cab9820f4ec5ee3d9124b700d`)
let res = await a.json()
console.log(res)
let name = res.name
let degree = Math.round(res.main.temp-273.15)+"°<sup>c</sup>"
let skyinformation = (res.weather[0].description)
let maxT = Math.round(res.main.temp_max-273.15)+"°<sup>c</sup>"+"/"
let minT = Math.round(res.main.temp_min-273.15)+"°<sup>c</sup>"
let lat = convertToDMS(res.coord.lat, true)
let lon = convertToDMS(res.coord.lon, false)
let air = (res.wind.speed * 3.6).toFixed(2) + "Km/h"
let feels = Math.round(res.main.feels_like-273.15)+"°<sup>c</sup>"

cityName.innerHTML = name
temp.innerHTML = degree
sky.innerHTML = skyinformation
maxTemp.innerHTML = maxT
minTemp.innerHTML = minT
Name.innerHTML = name
latitude.innerHTML = "Latitude : " + lat
longitude.innerHTML = "Longitude : " + lon
wind.innerHTML ="Wind Speed : " + air
feelsLike.innerHTML ="Feels_Like : " + feels

}

let search = document.getElementById("Search")
let arrow = document.getElementById("img2")
let closebtn = document.getElementById("img3")

arrow.addEventListener("click", ()=>{
    if(search.value){
        let value = parseInt(search.value)
        getweatherInformation(value) 
    }
    else{
        console.log("Search is empty!")
    }
})



closebtn.addEventListener("click", ()=>{
  search.value = "";
})



