const apiURL = 'https://api.openweathermap.org/data/2.5/weather?q=Fairbanks&units=imperial&appid=4640cab871b08e310b68a956a28ecd0b'


const getWeather = async () => {
    const response = await fetch(apiURL);
    result = await response.json();
    console.log(result);

    let temp = result.main.temp;
    document.querySelector('#current-temp').innerHTML = `<strong>${temp}</strong>`;

    const iconsrc= `https://openweathermap.org/img/w/${result.weather[0].icon}.png`;
    console.log(iconsrc)
    const desc = result.weather[0].description;
    document.querySelector('#weather-icon').textContent = iconsrc;
    document.querySelector('#weather-icon').setAttribute('src', iconsrc);
    document.querySelector('#weather-icon').setAttribute('alt', desc);
    document.querySelector('figcaption').textContent = desc;

};


getWeather();