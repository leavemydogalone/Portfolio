import React, { useState, useEffect } from "react";
import Markdown from "react-markdown";
import "./index.scss";

export default function Blog() {
  const [articles, setArticles] = useState([]);

  const importAll = (r) => r.keys().map(r);
  const markdownFiles = importAll(require.context("./Articles", false, /\.md$/))
    .sort()
    .reverse();

  useEffect(() => {
    async function fetchArticles() {
      const posts = await Promise.all(
        markdownFiles.map((file) => fetch(file).then((res) => res.text()))
      ).catch((err) => console.error(err));
      return await posts;
    }
    fetchArticles().then((data) => {
      setArticles(data);
    });
  }, [markdownFiles]);

  return (
    <div className="articles-container">
      <h1>Blog Articles</h1>
      <hr />
      {articles.map((article, index) => (
        <div key={index} className="article">
          <Markdown>{article}</Markdown>
          <hr />
        </div>
      ))}
    </div>
  );
}
