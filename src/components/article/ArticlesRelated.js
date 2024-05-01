import React, { useEffect, useState } from "react";
import { ArticlesWrapper } from "../../elements/articles";
import { getAllArticle } from "../../utils/apiHelper";

export const ArticlesRelated = () => {
  const [articles, setArticles] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    getAllArticle()
      .then((response) => {
        if (response) {
          setArticles(response);
        }
      })
      .catch((error) => {
        setLoading(true);
        setError(error);
      });
  }, []);
  if (error) {
    return <p>Loading ...</p>;
  }

  return (
    <div style={{ maxWidth: "50%" }}>
      {/* {loading === true ? (
        <p>Loading...</p>
      ) : (
        articles?.map((article) => (
          <ArticlesWrapper article={article} key={article._id} />
        ))
      )} */}
    </div>
  );
};
