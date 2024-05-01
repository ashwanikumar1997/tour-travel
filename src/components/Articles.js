/**
 * @author Mohit Sharma
 * @email mohitsharma@inimist.com
 * @create date 2019-09-03 10:52:05
 * @modify date 2019-09-03 10:52:05
 * @desc [description]
 */
import React, { useEffect, useState } from "react";
import { ArticlesTop, Pagination, ArticlesWrapper } from "../elements/articles";
import Banner from "../components/home/banner";
import { getAllArticle } from "../utils/apiHelper";
import IsLaoding from "../elements/Loading";
import { AlertPopUp } from "../validation/alert";
import bannerimage from "../assets/images/franceleclerc1.jpg";
import { Link, useLocation } from "react-router-dom";

function Articles() {
  const [articles, setArticles] = useState(null);
  const [error, setError] = useState(null);
  const location = useLocation();
  var banner = {
    name: "Articles & Tips",
    image: bannerimage,
  };

  useEffect(() => {
    getAllArticle()
      .then((response) => {
        console.log(response);
        if (response.status === 200) {
          setArticles(response.data);
        }else if(response.status >= 400)
        setError(response)
      })
  }, [location]);
  
  return (
    <>
      <div hidden={location.pathname == "/"}>
        <Banner props={banner} />
      </div>
      <div style={{ backgroundColor: "white" }}>
        <ArticlesTop />

        <div className="standard_wrapper">
          <div
            className="ppb_blog_grid one nopadding"
            style={{ padding: "0px 0 0px 0", marginBottom: "50px" }}
          >
            <div className="page_content_wrapper">
              <div className="inner">
                <div className="inner_wrapper">
                  <div
                    className="blog_grid_wrapper sidebar_content full_width ppb_blog_posts"
                    style={{ display: "flex" }}
                  >
                    {error ? (
                      <IsLaoding/>,
                      <AlertPopUp severity={"error"}>{error.error.message}</AlertPopUp>
                    ) : (
                      articles?.map((article) => (
                        <Link to={`/articles/${article._id}`}>
                          <ArticlesWrapper
                            article={article}
                            key={article._id}
                          />
                        </Link>
                      ))
                    )}
                  </div>
                </div>
                <div hidden={location.pathname == "/"}>
                  <Pagination />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Articles;
