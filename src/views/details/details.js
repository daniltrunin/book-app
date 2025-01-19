import { AbstractView } from "../../common/view";
import onChange from "on-change";
import { Details } from "../../components/details/detail";
import { Header } from "../../components/header/header";

export class DetailsView extends AbstractView {
    constructor(appState) {
        super();
        this.appState = appState;
        this.appState = onChange(this.appState, this.appStateHook.bind(this));
        this.setTitle("Details")
    }

    appStateHook(path) {
        if (path === "favorites") {
            this.render()
        }
    }

    render() {
        const selectedBook = this.appState.selectedBook
        const detail = document.createElement("div");
        detail.classList.add("details")
        detail.innerHTML = `
        <div class="details__book-title">
            ${selectedBook.title}
        </div>`
        detail.append(new Details(this.appState, { list: this.appState.favorites }).render())
        this.app.innerHTML = "";
        this.app.append(detail);
        this.renderHeader();
    }

    renderHeader() {
        const header = new Header(this.appState).render();
        this.app.prepend(header);
    }
}

