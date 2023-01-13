const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '76e3986eefmsha33a6def120b9c4p13fbd5jsnd3d04153648d',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};
const getWeather = (city) => {
	cityName.innerHTML = city
	cityName2.innerHTML = city
	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
		.then(response => response.json())
		.then((response) => {

			console.log(response)


			cloud_pct.innerHTML = response.cloud_pct
			cloud_pct2.innerHTML = response.cloud_pct

			feels_like.innerHTML = response.feels_like
			feels_like2.innerHTML = response.feels_like

			humidity.innerHTML = response.humidity
			humidity2.innerHTML = response.humidity
			humidity3.innerHTML = response.humidity

			max_temp.innerHTML = response.max_temp
			max_temp2.innerHTML = response.max_temp

			min_temp.innerHTML = response.min_temp
			min_temp2.innerHTML = response.min_temp

			sunrise.innerHTML = response.sunrise
			sunrise2.innerHTML = response.sunrise

			sunset.innerHTML = response.sunset
			sunset2.innerHTML = response.sunset

			temp.innerHTML = response.temp
			temp2.innerHTML = response.temp
			temp3.innerHTML = response.temp

			wind_degrees.innerHTML = response.wind_degrees
			wind_degrees2.innerHTML = response.wind_degrees

			wind_speed.innerHTML = response.wind_speed
			wind_speed2.innerHTML = response.wind_speed
			wind_speed3.innerHTML = response.wind_speed

		})
		.catch(err => console.error(err));
}


submits.addEventListener("click", (e) => {
	e.preventDefault();
	getWeather(city.value)
})

getWeather("Delhi")