import { DivComponent } from "../../common/div-component";
import "./detail.css"

export class Details extends DivComponent {
    constructor(appState) {
        super();
        this.appState = appState;
    }

    render() {
        this.el.classList.add("details");
        this.el.innerHTML = `
            <div>
                book info
            </div>
        `;

        

        return this.el;
    }
}