const API_KEY = 'YourAPI';

class WeatherData {
  constructor() {
    this.location = '';
    this.temperature = 0;
    this.condition = '';
    this.weatherIcon = '';
  }
}

class WeatherDataAdapter {
  static adaptFromAPI(apiData) {
    const commonData = new WeatherData();
    commonData.location = apiData.name;
    commonData.temperature = apiData.main.temp;
    commonData.condition = apiData.weather[0].main;
    commonData.weatherIcon = apiData.weather[0].icon;
    return commonData;
  }
}

const searchTemperature = () => {
  const cityInput = document.getElementById('city-name');
  const city = cityInput.value.trim(); // Remove leading/trailing white spaces

  if (!city) {
    displayErrorMessage('Please enter a city name.');
    return;
  }

  clearErrorMessage();
  setLoading(true);

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

  fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then((data) => {
      const commonData = WeatherDataAdapter.adaptFromAPI(data);
      displayTemperature(commonData);
    })
    .catch((error) => {
      displayErrorMessage('Error fetching weather data. Please try again.');
      console.error('API error:', error);
    })
    .finally(() => {
      setLoading(false);
    });
};

const setInnerText = (id, text) => {
  document.getElementById(id).innerText = text;
};

const displayTemperature = (temperature) => {
  setInnerText('city', temperature.location);
  setInnerText('temp', `${temperature.temperature} °C`);
  setInnerText('weather', temperature.condition);

  const url = `https://openweathermap.org/img/wn/${temperature.weatherIcon}@2x.png`;
  const imgIcon = document.getElementById('image-icon');
  imgIcon.setAttribute('src', url);
};

const setLoading = (isLoading) => {
  const loader = document.getElementById('loader');
  loader.style.display = isLoading ? 'block' : 'none';
};

const displayErrorMessage = (message) => {
  const errorMessage = document.getElementById('error-message');
  errorMessage.innerText = message;
};

const clearErrorMessage = () => {
  displayErrorMessage('');
};
