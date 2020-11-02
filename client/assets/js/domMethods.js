import { useIndexedDb } from "./indexedDb";
import { formatDate, getParams } from "./utils";

//Clear the article container an dinser placeholder articles
function renderPlaceHolders() {
    const articleContainer = document.querySelector(".article-container");
    const placeholders = createPlaceholders();

    while (articleContainer.firstChild) {
        articleContainer.removeChild(articleContainer.firstChild);
    }
    articleContainer.appendChild(placeholders);
}

//Create and return 4 placeholder articles
function createPlaceholders() {
    const fragment = document.createDocumentFragment();

    for (let i = 0; i < 4; i++) {
        const placeholder = createPlaceholder();
        fragment.appendChild(placeholder);
    }
    return fragment;
}

function createPlaceholder() {
    return createElement(
        "div",
        { class: "article-skeleton" },
        createElement(
            "div",
            { class: "article-skeleton__header" },
            createElement("div", { class: "article-skeleton__title" }),
            createElement("div", { class: "article-skeleton__published" })
        ),
        createElement(
            "div",
            { class: "article-skeleton__content" },
            createElement("div", { class: "article-skeleton__image" }),
            createElement("div", { class: "article-skeleton__text" }),
            createElement("div", { class: "article-skeleton__text" }),
            createElement("div", { class: "article-skeleton__text" }),
            createElement("div", { class: "article-skeleton__text" }),
            createElement("div", { class: "article-skeleton__text" })
        )
    );
}