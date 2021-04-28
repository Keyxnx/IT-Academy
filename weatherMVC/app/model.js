export default class Model {
    constructor(handleCity, handleLoadData) {
        this.handleCity = handleCity;
        this.handleLoadData = handleLoadData;
    }

    loadData(handleCity = 'kyiv') {
        const ajax = new XMLHttpRequest();

        ajax.addEventListener('load', () => {
            this.handleLoadData(JSON.parse(ajax.responseText));
        });

        ajax.open('GET',
            `https://api.openweathermap.org/data/2.5/weather?q=${handleCity}&appid=006069a700641a7f7997c29c558e9dce`,
            true);
        ajax.send();
    }

}