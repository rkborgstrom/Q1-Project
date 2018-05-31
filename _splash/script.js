(function () {

    let API_KEY = "48bec6862cf9f2f37892991bd1510a91";
    let searchButton = document.getElementById('searchButton');
    let search = document.getElementById('search');
    let humidity_widget = document.getElementById('humidity_widget');
    let pressure_widget = document.getElementById('pressure_widget');
    let temp_widget = document.getElementById('temp_widget');
    let tempMax_widget = document.getElementById('tempMax_widget');
    let tempMin_widget = document.getElementById('tempMin_widget');
    let weatherContainer = document.getElementById("weather-container");
    const weather = [];
    // let weatherWidget = document.getElementById('weather-widget')

    searchButton.addEventListener('click', function (event) {
        if (search.value === "") {
            alert('Please enter city')
        } else {
            event.preventDefault();
            fetch(`http://api.openweathermap.org/data/2.5/weather?q=${search.value}&units=imperial&APPID=48bec6862cf9f2f37892991bd1510a91`)
                .then(response => response.json())
                .then(data => {
                    console.log(data);

                    
                    let humidity = data.main.humidity;
                    let pressure = data.main.pressure;
                    let temp = data.main.temp;
                    let tempMax = data.main.temp_max;
                    let tempMin = data.main.temp_min;
                    humidity_widget.setAttribute('value', humidity);
                    pressure_widget.setAttribute('value', pressure);
                    temp_widget.setAttribute('value', temp);
                    tempMax_widget.setAttribute('value', tempMax);
                    tempMin_widget.setAttribute('value', tempMin);

                   
                   weatherContainer.innerHTML = (`${temp}&#8457;, ${tempMax}&#8457;, ${tempMin}&#8457;, ${humidity}&#8457;`);
             
                   
                //    weatherContainer.innerHTML = tempMax;
                //    weatherContainer.innerHTML = tempMin;
                   


                })
                .catch(error => console.log(error));
        }
    });

})();
