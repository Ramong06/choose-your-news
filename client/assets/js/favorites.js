import { checkForIndexedDb, useIndexedDb } from "./indexedDB";
import { renderArticles } from "./domMethods";

function loadPage() {
  if (checkForIndexedDb()) {
    useIndexedDb("articles", "ArticleStore", "get").then(results => {
      results.forEach(favorite => {
        favorite.favorite = true;
      });
      renderArticles(results, loadPage);
    });
  }
}

loadPage();