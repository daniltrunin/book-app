import { DivComponent } from "../../common/div-component";
import "./detail.css"

export class Details extends DivComponent {
    constructor(appState) {
        super();
        this.appState = appState;
    }

    render() {
        const selectedBook = this.appState.selectedBook
        console.log(selectedBook)
        this.el.classList.add("details__data");
        this.el.innerHTML = `
            <div class="details__info">
                <img
                    class="details__cover" 
                    src="https://covers.openlibrary.org/b/olid/${selectedBook.cover_edition_key}-M.jpg"
                    alt="book cover" 
                />
                <div class="details__material">
                    <div class="details__material-item">Author name: <span>${selectedBook.author_name}</span></div>
                    <div class="details__material-item">Category: <span>${selectedBook.subject ? selectedBook.subject[0] : "No tags"}</span></div>
                    <div class="details__material-item">First published: <span>${selectedBook.first_publish_year}</span></div>
                    <div class="details__material-item">Amount of pages: <span>${selectedBook.number_of_pages_median}</span></div>
                    <button class="details__material-btn ">ADD TO FAVORITES</button>
                </div>
            </div>
                <div class="details__tags">
                    <div class="details__tags-headling">Tags:</div>
                    <div class="details__tags-items">
                        <div class="details__tags-item">${selectedBook.subject[0]}</div>
                        <div class="details__tags-item">${selectedBook.subject[1]}</div>
                        <div class="details__tags-item">${selectedBook.subject[2]}</div>
                        <div class="details__tags-item">${selectedBook.subject[3]}</div>
                    </div>

                </div>
        `;



        return this.el;
    }
}