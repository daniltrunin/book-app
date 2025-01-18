import { DivComponent } from "../../common/div-component";
import "./footer.css"

export class Footer extends DivComponent {
    constructor(state) {
        super();
        this.state = state;
    }

    render() {
        this.el.classList.add("footer");
        this.el.innerHTML = `
                <div class="footer__item footer__item-left">
                    <img src="./././static/arrow_left.svg" />
                    Предыдущая страница
                </div>
                <div class="footer__item footer__item-right">
                    Следующая страница
                    <img src="./././static/arrow_right.svg" />
                </div>
        `;
        return this.el;
    }
}