const { nanoid } = require('nanoid');
import db from '../db';

export default class ArticleModel {
  constructor({ title, intro }) {
    this.id = nanoid();
    this.title = title;
    this.intro = intro;
  }

  static getArticleList() {
    return db.getData()['articles'];
  }

  createArticle() {
    const articlesData = db.getData()['articles'];
    articlesData.push({
      id: this.id,
      title: this.title,
      intro: this.intro,
    });
    db.setData('articles', articlesData);
    return this;
  }
}
