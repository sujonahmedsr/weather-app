let apiKey = '79f7ddaa1c5791aa1599df77e3efe310';
let apiUrl = 'https://api.openweathermap.org/data/2.5/weather?units=metric&q=';

let input = document.querySelector('input');
let button = document.querySelector('button');
let weatherImg = document.querySelector('.weather-img')

async function checkWeather(city){
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    var data = await response.json();

    console.log(data);
    if(response.status == 404){
        document.querySelector('.error').style.display = 'block';
        document.querySelector('.weather').style.display = 'none';
    }else{
        if(data.weather[0].main == 'Clear'){
            weatherImg.src = 'images/clear.png'
    
        }else if(data.weather[0].main == 'Clouds'){
            weatherImg.src = 'images/clouds.png'
    
        }else if(data.weather[0].main == 'Drizzle'){
            weatherImg.src = 'images/drizzle.png'
    
        }else if(data.weather[0].main == 'Mist'){
            weatherImg.src = 'images/mist.png'
    
        }else if(data.weather[0].main == 'Rain'){
            weatherImg.src = 'images/rain.png'
    
        }
        document.querySelector('.weather').style.display = 'block'
        document.querySelector('.error').style.display = 'none';
        input.value = ''
 
    }
    document.querySelector('.city').innerHTML = data.name;
    document.querySelector('.temp').innerHTML = Math.round(data.main.temp) + `°c`;
    document.querySelector('#humidity').innerHTML = data.main.humidity + `%`;
    document.querySelector('#wind').innerHTML = data.wind.speed + ` km/h`;

        console.log(data.wind.speed );
        console.log(data.main.humidity );
    
}


button.addEventListener('click', ()=>{
    checkWeather(input.value);
})


