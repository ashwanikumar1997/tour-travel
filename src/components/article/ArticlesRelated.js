import React, { useEffect, useState } from "react";
import { ArticlesWrapper } from "../../elements/articles";
import { getAllArticle } from "../../utils/apiHelper";


export const ArticlesRelated = () => {
  const [articles, setArticles] = useState(null);

  useEffect(() => {
    getAllArticle().then((response) => {
      if (response) {
        setArticles(response);
      }
    });
  }, []);
  return (
    <div style={{maxWidth:"50%"}}>
      {articles?.map((article) => (
        <ArticlesWrapper article={article} key={article._id}/>
      ))}
    </div>
  );
};
