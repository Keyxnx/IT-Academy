export default class View {
    constructor(handleClick) {

        document.querySelector('.submit-btn').addEventListener('click', (e) => {
            e.preventDefault();
            handleClick();
        })
        this.getDate();
    }

    renderData(data) {
        document.querySelector('.temperature').innerHTML = `${Math.round(data.main.temp - 272)} °C`;
        document.querySelector('.max-temperature').innerHTML = `${Math.round(data.main.temp_max - 272)} °C`;
        document.querySelector('.min-temperature').innerHTML = `${Math.round(data.main.temp_min - 272)} °C`;
        document.querySelector('.humidity').innerHTML = `${data.main.humidity} %`;
        document.querySelector('.air-pressure').innerHTML = `${data.main.pressure} PS`;
        document.querySelector('.feels-like').innerHTML = `${Math.round(data.main.feels_like - 272)} °C`;
        document.querySelector('.wind-speed').innerHTML = `${data.wind.speed} km/h`;
    }

    getDate() {
        let date = new Date();
        let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
        let dayOfWeek = days[date.getDay()];
        let mm = months[date.getMonth()];
        let dd = date.getDate();
        let yyyy = date.getFullYear();
        document.querySelector('.date-month').innerHTML = mm;
        document.querySelector('.date-day').innerHTML = dd;
        document.querySelector('.date-day-of-week').innerHTML = dayOfWeek;
        document.querySelector('.date-year').innerHTML = yyyy;
    }

}