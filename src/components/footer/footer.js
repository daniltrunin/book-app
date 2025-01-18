import { DivComponent } from "../../common/div-component";
import "./footer.css"

export class Footer extends DivComponent {
    constructor(state) {
        super();
        this.state = state;
    }

    async stateHook(path) {
        if (path === "searchQuery") {
            this.state.loading = true;
            const data = await this.loadList(this.state.searchQuery, this.state.offset)
            this.state.loading = false;
            this.state.numFound = data.numFound;
            this.state.list = data.docs;
        }

        if (path === "list" || path === "loading") {
            this.render();
        }
    }

    async loadList(q, offset) {
        const res = await fetch(`https://openlibrary.org/search.json?q=${q}&offset=${offset}&limit=9`)
        return res.json();
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

        this.el.querySelector(".footer__item-left").addEventListener("click", () => {
            if (this.state.offset > 0) {
                this.state.offset -= 10
                const data = this.loadList(this.state.searchQuery, this.state.offset);
                data.then((data) => {
                    this.state.list = data.docs;
                })
            }

        });

        this.el.querySelector(".footer__item-right").addEventListener("click", () => {
            this.state.offset += 10;
            const data = this.loadList(this.state.searchQuery, this.state.offset);
            data.then((data) => {
                this.state.list = data.docs;
            })
        });

        return this.el;
    }
}