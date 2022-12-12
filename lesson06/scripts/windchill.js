const apiURL = 'https://api.openweathermap.org/data/2.5/weather?q=Kigali&units=imperial&appid=4640cab871b08e310b68a956a28ecd0b'


const getWeather = async () => {
    const response = await fetch(apiURL);
    result = await response.json();

    let temp = result.main.temp;
    const wSpeed = result.wind.speed;
    document.getElementById("temperature").innerHTML = temp;
    document.getElementById("chillWind").innerHTML = wSpeed;    
    callwindchill(temp,wSpeed);
};


const callwindchill=(t,s)=> {
    let chill = 35.74 + 0.6215 * t - 35.75 * Math.pow(s, 0.16) + 0.4275 * t* Math.pow(s, 0.16);
    document.getElementById("chillWind").innerHTML = chill.toFixed(1);
}

getWeather();



