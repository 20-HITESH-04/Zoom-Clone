import axios from "axios";

export const fetchWeatherData = async (location: string) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${process.env.NEXT_PUBLIC_OPENWEATHERMAP_API_KEY}&units=metric`;
    try {
        const { data } = await axios.get(url);
        console.log(data);
        return data;
    } catch (error) {
        console.error('Error fetching weather:', error);
        return null;
    }
};