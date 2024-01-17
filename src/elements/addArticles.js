import React from 'react';
import  BlogEditor  from "../components/editor/Editor";

export const addArticles = () => {
  return (
    <div
      className="one withsmallpadding ppb_header "
      style={{
        textAlign: "center",
        padding: "0px 0 0px 0",
        marginTop: "0px",
        marginBottom: "50px",
      }}
    >
      <div className="standard_wrapper">
        <div className="page_content_wrapper">
          <div className="inner">
            <div style={{ margin: "auto", width: "100%" }}>
              <h2 className="ppb_title">Add Trip Articles &amp; Tips</h2>
              <div className="page_tagline" style={{ color: "#38404F" }}>
                <BlogEditor/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
