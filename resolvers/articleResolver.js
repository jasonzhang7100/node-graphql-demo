import ArticleModel from '../Models/ArticleModel';

export default {
  Query: {
    articleList: () => ArticleModel.getArticleList(),
  },
  Mutation: {
    createArticle: (parent, args) =>
      new ArticleModel({
        title: args.title,
        intro: args.intro,
      }).createArticle(),
  },
};
