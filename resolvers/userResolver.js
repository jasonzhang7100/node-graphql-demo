import { nanoid } from 'nanoid';

export default {
  Query: {
    user: () => ({
      id: nanoid(),
      name: 'joey',
      age: 8,
    }),
  },
};
