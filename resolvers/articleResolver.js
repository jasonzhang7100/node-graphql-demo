import { nanoid } from 'nanoid';

export default {
  Query: {
    article: () => ({
      id: nanoid(),
      title: 'an article',
      intro: 'about sex',
    }),
  },
};
