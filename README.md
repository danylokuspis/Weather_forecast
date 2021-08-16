# Weather_forecast
Weather forecast for Ukraine


Back-end:

Implement simple API-only application that has two endpoints (using Node JS):

1. Endpoint that allows to fetch list of known locations
	Request: GET http://localhost:8080/locations
	Response: 
		```
		{
			"locations": [
				{
					"id": <number>,
					"name": <string>,
					"latitude": <number>,
					"longitude": <number>
				},
				...
			]
		}
		```


2. Endpoint that allows to get current weather at location
	Request: GET http://localhost:8080/locations/:id/weather
	Response: 
		```
		{
			"weather": {
				"temperature": <number>,
				"humidity_percent": <0..1>,
				"sky": <"clear", "cloudy", "mostly_clear">
			}
		}
		```





Front-end (using React):

0. Create simple .json files
	- locations.json
	- lviv.json
	- kyiv.json

1. Create page that show list of locations:

- Lviv
- Kyiv

2. When user clicks on location - show current weather in new page
