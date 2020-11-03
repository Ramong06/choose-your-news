// Creates pseudo-unique ids for articles
export function createArticleIds(articles) {
  return articles.map(article => {
    article._id = removeSpecialCharsFromString(article.url)
    return article;
  });
}

//returns URL query params as object
export function getParams() {
    return location.search.substring(1).split("&").reduce((acc, curr) => {
        const [key, value] = curr.split("=");
        acc[key] = value;
        return acc;
    }, {});
}