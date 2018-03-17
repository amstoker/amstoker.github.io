// javascript document

var weatherObject = new XMLHttpRequest();
var weatherObjects = new XMLHttpRequest();

weatherObject.open('GET', 'http://api.wunderground.com/api/188b7762a0954c3b/conditions/q/MN/Franklin.json', 'true');

weatherObject.send();

weatherObject.onload = function() {
    
    var weatherInfo = JSON.parse(weatherObject.responseText);
    console.log(weatherInfo);
    
     document.getElementById('place').innerHTML = weatherInfo.current_observation.display_location.full;
    
      document.getElementById('w_icon').src = weatherInfo.current_observation.icon_url;

    document.getElementById('currentTemp').innerHTML = weatherInfo.current_observation.temp_f;

     
    document.getElementById('currentWeather').innerHTML = weatherInfo.current_observation.weather;
    
    document.getElementById('windSpeed').innerHTML = weatherInfo.current_observation.wind_mph;
    
       
    document.getElementById('rain').innerHTML = weatherInfo.current_observation.precip_today_in;
    
       
}

weatherObjects.open ('GET','http://api.wunderground.com/api/188b7762a0954c3b/forecast/q/MN/Franklin.json', 'true');

weatherObjects.send();

weatherObjects.onload = function() {
    
      var weatherInfo = JSON.parse(weatherObjects.responseText);
    console.log(weatherInfo);
     document.getElementById('weatherDetail').innerHTML = weatherInfo.forecast.simpleforecast;
    
     document.getElementById('high').innerHTML = weatherInfo.forecast.simpleforecast.forecastday["0"].high;
    
     document.getElementById('low').innerHTML = weatherInfo.forecast.simpleforecast.forecastday["0"].low;
}