/**
 * @author Mohit Sharma
 * @email mohitsharma@inimist.com
 * @create date 2019-09-03 10:50:44
 * @modify date 2019-09-03 10:50:44
 * @desc [description]
 */
import React from "react";
import {
  ArticlesTop,
  LoadArticles,
  ArticlesWrapper,
} from "../../elements/articles";
import { ImageApiUrl } from "../../functions/constants/apiConstants";
import { getAllArticle } from "../../utils/apiHelper";
import Articles from "../Articles";


function ArticlesSection() {


  return (
    <>
     <Articles/>
    </>
  );
}
export default ArticlesSection;
