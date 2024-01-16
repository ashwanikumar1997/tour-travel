/**
 * @author Mohit Sharma
 * @email mohitsharma@inimist.com
 * @create date 2019-09-03 10:52:18
 * @modify date 2019-09-03 10:52:18
 * @desc [description]
 */
import React, { useEffect, useState } from "react";
import "../assets/css/landing.css";
import { useParams } from "react-router-dom";
import { getSingleArticle } from "../utils/apiHelper";
import Spinner from "./common/Spinner";
import { ArticlesRelated } from "./article/ArticlesRelated";
import parse from "html-react-parser";

function SingleArticles() {
  const [article, setArticle] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      getSingleArticle(id).then((response) => {
        setArticle([response]);
      });
    }
  }, [id]);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        width: "100%",
        justifyContent: "space-around",
        marginTop: "200px",
      }}
    >
      {article ? (
        article?.map((post) => (
          <div>
            <div id="page_caption">
              <div className="page_title_wrapper">
                <div className="page_title_inner">
                  <div className="page_title_content">
                    <h1>{post.title}</h1>
                    <div className="post_detail single_post">
                      <span className="post_info_date">
                        <a href="#" title="7 Tips For Nomads On A Budget Trips">
                          December 10, 2023
                        </a>
                      </span>
                      <span className="post_info_comment">
                        <a href="#">0&nbsp;Comment</a>
                      </span>
                      <div
                        style={{
                          margin: "15px",
                          padding: "10px",
                          display: "flex",
                          flexDirection: "row",
                          gap: "5px",
                        }}
                      >
                        <div
                          style={{
                            color: "black",
                            fontWeight: "lighter",
                            width: "50%",

                            textAlign: "justify",
                          }}
                        >
                          {parse(post.content)}
                        </div>
                        <div
                          style={{
                            width: "50%",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                          }}
                        >
                          <ArticlesRelated />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))
      ) : (
        <Spinner />
      )}
    </div>
  );
}
export default SingleArticles;
