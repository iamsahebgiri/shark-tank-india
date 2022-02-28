import { memes } from '~/data/memes';

export const loader = async () => {
  return memes[Math.floor(Math.random() * memes.length)];
};
