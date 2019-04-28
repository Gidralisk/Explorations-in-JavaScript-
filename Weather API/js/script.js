


const APIKey = "62adef9b9d54b97e7d79bacab4948a99";
var city = "Moscow";
const url = "http://api.openweathermap.org/data/2.5/weather?q="+city+"&appid="+APIKey;


console.log(url)

let xhr = new XMLHttpRequest()

xhr.open('GET', url, false);
xhr.send();

let DATA = JSON.parse(xhr.responseText);
console.log(DATA)

//document.write(DATA.main.temp - 273);

const form = document.querySelector("form");
const resault = document.querySelector("h1");


form.onsubmit = function(e) {
  e.preventDefault();
  city = form.elements.cityInput.value;
  resault.innerHTML = "погода: "+Math.round(DATA.main.temp - 273)+" градусов целься, скорость ветра: "+(DATA.wind.speed)+"м/с";
}