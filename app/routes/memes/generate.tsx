import React, { useRef, useState } from 'react';

export default function Posts() {
  const [meme, setMeme] = useState('');
  const title = useRef(null);
  const url = useRef(null);

  const generateMongoDbId = function () {
    var timestamp = ((new Date().getTime() / 1000) | 0).toString(16);
    return (
      timestamp +
      'xxxxxxxxxxxxxxxx'
        .replace(/[x]/g, function () {
          return ((Math.random() * 16) | 0).toString(16);
        })
        .toLowerCase()
    );
  };

  const submitHandler: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault();
    setMeme(`{
      id: "${generateMongoDbId()}",
      title: "${title.current.value}",
      url: "${url.current.value}",
      createdAt: "${new Date().toISOString()}",
      updatedAt: "${new Date().toISOString()}"
}`);
  };

  return (
    <main>
      <h1>Generate Meme</h1>
      <small>
        There is no database in the backend. This is just a helper page to
        create meme struct and append it to memes array.
      </small>

      <p>
        <label htmlFor="title">Title</label>
        <textarea name="title" required ref={title} />
      </p>
      <p>
        <label htmlFor="url">URL</label>
        <input type="url" name="url" required ref={url} />
      </p>
      <button type="submit" onClick={submitHandler}>
        Generate
      </button>
      <pre>{meme}</pre>
    </main>
  );
}
