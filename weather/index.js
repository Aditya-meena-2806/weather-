const apiKey = '3cff6e52478bf9ab598054051b4cf042';
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather';

var inputvalue = document.querySelector('#cityinput')
var btn = document.querySelector('#add');
var city = document.querySelector('#cityoutput')
var descrip = document.querySelector('#description')
var temp = document.querySelector('#temp')
var wind = document.querySelector('#wind')

btn.addEventListener('click',() => {
const location = inputvalue.value;
if(location){
    fetchWeather(location);
}
});

function fetchWeather(location){
    const url = `${apiUrl}?q=${location}&appid=${apiKey}&units=metric`;

    fetch(url)
        .then(response=> response.json())

        .then(data => {
            var nameval = data['name']
            var descrip = data['weather']['0']['description']
            var tempature = data['main']['temp']
            var wndspeed = data['wind']['speed']

            city.innerHTML = `Weather of <span>${nameval}</span>`
            temp.innerHTML = `Temperature: <span>${Math.round(data.main.temp)}C</span>`
            description.innerHTML = `Sky Conditions: <span>${descrip}</span>`
            wind.innerHTML = `Wind Speed: <span>${wndspeed} km/h</span>`

        })
.catch(error => {
    console.error('Error fetching weather data:',error);
})
}

