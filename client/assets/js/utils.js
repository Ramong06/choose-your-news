// Creates pseudo-unique ids for articles
export function createArticleIds(articles) {
  return articles.map(article => {
    article._id = removeSpecialCharsFromString(article.url)
    return article;
  });
}