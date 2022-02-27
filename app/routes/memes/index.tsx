import { db } from '~/utils/db.server';

export const loader = async () => {
  return await db.meme.findMany();
};
