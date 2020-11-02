import { createArticleIds, getParams } from "./utils";

// Loads articles
export function loadArticles() {
  const BASE_URL =
    "https://newsapi.org/v2/everything?sortBy=published&apiKey=e41ee36d9a714a199911b42cb75a4fe3&q=";