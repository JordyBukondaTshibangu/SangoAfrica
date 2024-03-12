import React from "react";
import ArticleHero from "@/components/articles/container/ArticleHero";
import ArticleList from "@/components/articles/container/ArticleList";
import pickRandomObject from "@/utils/randomItem";

async function getArticles() {
  const res = await fetch("http://127.0.0.1:8080/articles.json", {
    next: {
      revalidate: 60,
    },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch Articles");
  }

  return res.json();
}

const ArticlesPage = async () => {
  const articles = await getArticles();
  const article = pickRandomObject(articles);

  return (
    <div className="flex flex-col gap-10">
      <ArticleHero article={article} />
      <ArticleList articles={articles} />
    </div>
  );
};

export default ArticlesPage;
