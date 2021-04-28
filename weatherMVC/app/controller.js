import Model from './model.js';
import View from './view.js';

export default class Controller {
    constructor() {
        this.model = new Model(this.handleCity, this.handleLoadData.bind(this));
        this.view = new View(this.handleClick.bind(this));
    }

    handleClick() {
        const city = document.querySelector('.search-box').value;
        this.handleCity(city);
    }

    handleCity(city) {
        this.model.loadData(city);
    }

    handleLoadData(data) {
        this.view.renderData(data);
    }
}