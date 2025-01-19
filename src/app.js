import { FavoritesView } from "./views/favorites/favorites";
import { MainView } from "./views/main/main";
import { DetailsView } from "./views/details/details";

class App {
    routes = [
        {
            path: "",
            view: MainView
        },
        {
            path: "#favorites",
            view: FavoritesView
        },
        {
            path: "#details",
            view: DetailsView
        }
    ]

    appState = {
        favorites: []
    }

    constructor() {
        window.addEventListener("hashchange", this.route.bind(this));
        this.loadStorage()
        this.route()
    }

    route() {
        if (this.currentView) {
            this.currentView.destroy();
        }
        const view = this.routes.find(r => r.path == location.hash).view
        this.currentView = new view(this.appState);
        this.currentView.render();
    }

    loadStorage() {
        const localStorageArray = Object.keys(localStorage);
        localStorageArray.forEach(item => {
            const value = localStorage.getItem(item)
            const json = JSON.parse(value);
            this.appState.favorites.push(json);
        })
    }
}

new App();



