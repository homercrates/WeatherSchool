const button = document.querySelector('.button');
const inputValue = document.querySelector('.inputValue');
const name = document.querySelector('.name');
const desc = document.querySelector('.desc');
const temp = document.querySelector('.temp');
const tempMin = document.querySelector('.tempMin');
const tempMax = document.querySelector('.tempMax');

fetch('https://api.openweathermap.org/data/2.5/weather?id=5392171&units=imperial&appid=f9d41396ea02e34115db311c180a8034')
    .then(response => response.json())
    .then(data => {
        const nameValue = data['name'];
        const tempValue = data['main']['temp'];
        const descValue = data['weather'][0]['description'];
        const tempMinVal = data['main']['temp_min'];
        const tempMaxVal = data['main']['temp_max'];
        console.log(data);

        //name.innerHTML = nameValue;
        temp.innerHTML = 'Temp now: ' + tempValue;
       // desc.innerHTML = 'Description: ' + descValue;
       // tempMin.innerHTML = 'Min: ' + tempMinVal;
       // tempMax.innerHTML = 'Max: ' + tempMaxVal;
    })

    .catch(err => alert("Error", err))