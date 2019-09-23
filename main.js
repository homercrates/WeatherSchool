const button = document.querySelector('.button');
const inputValue = document.querySelector('.inputValue');
const name = document.querySelector('.name');
const desc = document.querySelector('.desc');
const temp = document.querySelector('.temp');
const tempMin = document.querySelector('.tempMin');
const tempMax = document.querySelector('.tempMax');
const dateNow = document.querySelector('.dateNow');
const desc3Hr = document.querySelector('.desc3Hr');
const temp3Hr = document.querySelector('.temp3Hr');
const desc6Hr = document.querySelector('.desc6Hr');
const temp6Hr = document.querySelector('.temp6Hr');
const date3 = document.querySelector('.date3');
const date6 = document.querySelector('.date6');

fetch('https://api.openweathermap.org/data/2.5/forecast?id=5392171&units=imperial&appid=f9d41396ea02e34115db311c180a8034')
    .then(response => response.json())
    .then(data => {
       //const nameValue = data['name'];
        const tempValue = data['list'][0]['main']['temp'];
        //const tempValue1Hr = data['list'][1]['main']['temp'];
        const descValue = data['list'][0]['weather'][0]['description'];
        const dateNowVal = data['list'][0]['dt']

        const temp3HrValue = data['list'][1]['main']['temp'];
        const desc3HrValue = data['list'][1]['weather'][0]['description'];
        const date3Val = data['list'][1]['dt']

        const temp6HrValue = data['list'][2]['main']['temp'];
        const desc6HrValue = data['list'][2]['weather'][0]['description'];
        const date6Val = data['list'][2]['dt']

        //name.innerHTML = nameValue;
        temp.innerHTML = 'Temp now: ' + tempValue;
        dateNow.innerHTML = new Date( dateNowVal * 1000);
        desc.innerHTML = 'Description: ' + descValue;

        temp3Hr.innerHTML = 'Temp in 3 Hours: ' + temp3HrValue;
        desc3Hr.innerHTML = 'Description in 3 hours: ' + desc3HrValue;
        date3.innerHTML = new Date( date3Val * 1000 )

        temp6Hr.innerHTML = 'Temp at pick up: ' + temp6HrValue;
        desc6Hr.innerHTML = 'Description at pick up: ' + desc6HrValue;
        date6.innerHTML = new Date( date6Val * 1000 );
    })

    .catch(err => alert("Error", err))