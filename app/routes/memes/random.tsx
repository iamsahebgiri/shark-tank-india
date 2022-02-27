import { memes } from '~/data/memes';

export const loader = async () => {
  const meme = memes.at(Math.floor(Math.random() * memes.length));
  return meme;
};
