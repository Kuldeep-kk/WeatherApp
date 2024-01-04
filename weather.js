document.querySelector('form').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevents the default form submission behavior

    const inputLocation = document.querySelector('input[name="search"]').value;
    if (inputLocation.trim() === "") {
        // If input is empty, show an alert and return
        alert("Please enter a location.");
        return;
    }

    getWeather(inputLocation);
});



const getWeather=(inputLocation)=>{
    
const url = `https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${inputLocation}`;
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '4e72658c32msh31047aa4f597869p169642jsne481bd861a91',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

(async () => {
    try {
        const response = await fetch(url, options);
        const result = await response.json();
        console.log(result);
        document.getElementById('weatherTemp').innerHTML = `${result.temp} °C`;
        document.getElementById('cityArea').innerHTML=`${inputLocation}`;
        document.getElementById('humidity').innerHTML=`${result.humidity} %`;
        document.getElementById('wind').innerHTML=`${result.wind_speed} Km/h`;

        const sunriseTime = new Date(result.sunrise * 1000); // Convert seconds to milliseconds
const sunsetTime = new Date(result.sunset * 1000); // Convert seconds to milliseconds

// Format the times (you can adjust the format according to your needs)
const formattedSunriseTime = sunriseTime.toLocaleTimeString();
const formattedSunsetTime = sunsetTime.toLocaleTimeString();
document.getElementById('sunrise').innerHTML=`${formattedSunriseTime}`;
document.getElementById('sunset').innerHTML=`${formattedSunsetTime}`;

        // You can add more DOM manipulations here based on the API response
    } catch (error) {
        console.error(error);
    }
})();

}





function toggleAdditionalInfo() {
    var additionalInfo = document.getElementById("additionalInfo");
    var showMoreBtn = document.getElementById("showMore");
    var showLessBtn = document.getElementById("showLess");

    if (additionalInfo.style.display === "none") {
        additionalInfo.style.display = "grid";
        showMoreBtn.style.display = "none";
        showLessBtn.style.display = "inline-block";
    } else {
        additionalInfo.style.display = "none";
        showMoreBtn.style.display = "inline-block";
        showLessBtn.style.display = "none";
    }
}

getWeather("Delhi");


