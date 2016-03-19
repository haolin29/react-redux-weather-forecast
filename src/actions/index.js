const API_KEY = '2011e57ebb106f72101cbe87becdbe6e';

const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
	cosnt url = `${ROOT_URL}&q=${city},us`;


	return {
		type: FETCH_WEATHER;
	};
}

