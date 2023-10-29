# Weather-app
Assignment 4
Weather App

Description

This Weather App allows users to search for weather information in different locations. It retrieves data from the OpenWeatherMap API and displays it in a user-friendly format, including the city name, temperature, weather condition, and an icon.

Features

Input validation to ensure a valid city name is provided.
Loading indicator during data retrieval.
Error handling for API request failures.
Display of weather information, including temperature, city name, and weather condition.
Dynamic updating of weather information based on user input.

Open the index.html file in your preferred web browser.

API_KEY: This constant stores the API key for accessing the OpenWeatherMap API. You should replace it with your actual API key.                            
Search Function:
• searchTemperature(): This function is called when the "Search" button is clicked. It initiates the process of fetching weather data based on the city name entered.
• cityInput.value.trim(): This line gets the city name from the input field and removes any leading or trailing white spaces using trim().

Fetching Weather Data:
 • It constructs the URL for the OpenWeatherMap API request using the provided city name and API key.
 • It uses the fetch API to make an HTTP GET request to the OpenWeatherMap API and fetches weather data in JSON format.
 • Error Handling: If the HTTP response status is not in the range 200-299 (i.e., if it's not okay), it throws an error, which is caught in the catch block. An error message is displayed in the weather status section.
 • If the data is successfully fetched, it is passed to the WeatherDataAdapter.adaptFromAPI(data) method to convert the data into the standardized WeatherData structure.
 • Finally, the displayTemperature(commonData) function is called to update the weather information on the page.

Displaying Weather Data:
 • displayTemperature(temperature): This function takes a WeatherData object as input and updates the HTML elements on the page with the weather information.

Helper Functions:
 • setInnerText(id, text): This function sets the text content of an HTML element with the specified id.
 • setLoading(isLoading): This function shows or hides the loading indicator based on the isLoading parameter.
 • displayErrorMessage(message): This function displays an error message on the page.
 • clearErrorMessage(): This function clears the error message on the page.
