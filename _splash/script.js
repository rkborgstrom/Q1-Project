// let APPID="48bec6862cf9f2f37892991bd1510a91";
// let temp;
// let location;
// let icon;
// let humidity;
// let wind;
// let direction;

// function update(weather) {
//     wind.innerHTML = weather.wind;
//     direction.innerHTML = weather.direction;
//     humidity.innerHTML = weather.humidity;
//     location.innerHTML = weather.location;
//     temp.innerHTML = weather.temp;
//     icon.src = "imgs/codes/" + weather.icon + ".png";
//     console.log(icon.src);

// }

// windown.onlaod = function() {
//     temp = document.getElementById("temperature");
//     location = document.getElementById("location");
//     icon = document.getElementById("icon");
//     humidity = document.getElementById("humidity");
//     wind = document.getElementById("wind");
//     direction = document.getElementById("direction");

//     let weater = {};
//     weather.wind = 3.5;
//     weather.diretion = "N";
//     weather.humidity = 75;
//     weather.location = "Austin";
//     weather.temp = "96";
//     weather.icon = 200;



//     update(weather);
// }

// let slider = document.getElementById('test-slider');
// noUiSlider.create(slider, {
//  start: [20, 80],
//  connect: true,
//  step: 1,
//  orientation: 'horizontal', // 'horizontal' or 'vertical'
//  range: {
//    'min': 0,
//    'max': 100
//  },
//  format: wNumb({
//    decimals: 0
//  })
// });


(function () {

    let API_KEY = "48bec6862cf9f2f37892991bd1510a91";
    let searchButton = document.getElementById('searchButton');
    let search = document.getElementById('search');
    const weather = [];

    searchButton.addEventListener('click', function (event) {
        if (search.value === "") {
            alert('Please enter city')
        } else {
            event.preventDefault();
            fetch(`http://api.openweathermap.org/data/2.5/weather?q=${search.value}&APPID=48bec6862cf9f2f37892991bd1510a91`)
                .then(response => response.json())
                .then(data => {
                    console.log(data);
                    let weatherArray = data.message;
                    let humidity = data.main.humidity;
                    let pressure = data.main.pressure;
                    let temp = data.main.temp;
                    let tempMax = data.main.temp_Max;
                    let tempMin = data.main.temp_Min;
                 
                    
                })
                .catch(error => console.log(error));
        }
    });

})();
