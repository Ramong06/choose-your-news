import { useIndexedDb } from "./indexedDb";
import { formatDate, getParams } from "./utils";

function renderPlaceHolders() {
    const articleContainer = document.querySelector(".article-container");
    const placeholders = createPlaceholders();

    while (articleContainer.firstChild) {
        articleContainer.removeChild(articleContainer.firstChild);
    }
    articleContainer.appendChild(placeholders);
}