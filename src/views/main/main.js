import onChange from "on-change";
import { AbstractView } from "../../common/view";
import { Header } from "../../components/header/header";

export class MainView extends AbstractView {
    state = {
        list: [],
        loading: false,
        searchQuery: undefined,
        offset: 0
    };

    constructor(appState) {
        super();
        this.appState = appState;
        this.appState = onChange(this.appState, this.appStateHook.bind(this));
        this.setTitle("Поиск книг")
    }

    appStateHook(path) {
        console.log(path)
    }

    render() {
        const main = document.createElement("div");
        this.app.innerHTML = "";
        this.app.append(main);
        this.renderHeader();
        this.appState.favorites.push("Star Wars");
    }

    renderHeader() {
        const header = new Header(this.appState).render();
        this.app.prepend(header);
    }
}