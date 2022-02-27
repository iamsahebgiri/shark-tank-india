import { LoaderFunction } from 'remix';
import { memes } from '~/data/memes';

export const loader: LoaderFunction = async ({ params }) => {
  const meme = memes.filter((meme) => meme.id === params.slug);
  if (meme.length === 0) {
    return {
      message: 'No meme found with this id',
    };
  }
  return meme[0];
};
