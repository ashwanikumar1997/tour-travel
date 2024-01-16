/**
 * @author Mohit Sharma
 * @email mohitsharma@inimist.com
 * @create date 2019-09-03 10:51:08
 * @modify date 2019-09-03 10:51:08
 * @desc [description]
 */
import React, { Component } from "react";
import Banner from "../home/banner";
import ElementGrid from "../commonwidget/packagegrid";
import Spinner from "../common/Spinner";
import { getPlace } from "../../actions/destinationActions";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import SelectedCountryShow from "./SelectedCityShow";

class SingleDestination extends Component {
  constructor() {
    super();
    this.state = {
      place: [],
      loading: true,
    };
  }

  componentDidMount() {
    this.props.getPlace(this.props._id);
  }

  render() {
    const { place, loading } = this.props;

    let placeContent;
    let banner;
    let tours;
    const items = [];

    if (place === null || loading) {
      tours = [];
      placeContent = <Spinner />;
    } else {
      if (place.destinations.length > 0) {
        tours = place.destinations;
        banner = {
          name: place.destinations.place.city,
          image: place.destinations.place.city_img,
        };

        tours.map((tour, index) =>
          items.push(<ElementGrid tour={tour} key={tour._id} />)
        );
      }
    }

    return (
      <>
      
      <Banner props={banner} />
      <div id="page_content_wrapper" className="hasbg ">
        {placeContent}
        <div className="inner">
          <div className="inner_wrapper">
            <div className="tour_related">
              <h3 className="sub_title">Related Tours</h3>
              <div
                id="portfolio_filter_wrapper"
                className="gallery classNameic four_cols portfolio-content section content clearfix"
                data-columns="4"
              >
                <SelectedCountryShow />
              </div>
              <div className="sidebar_content full_width ">
                <blockquote>
                  <p>
                    Santorini is essentially what remains after an enormous
                    volcanic eruption that destroyed the earliest settlements on
                    a formerly single island
                  </p>
                </blockquote>
                <h4 className="p1">
                  <span className="s1">Exploring the Area</span>
                </h4>
                <p className="p2">
                  Meh synth Schlitz, tempor duis single-origin coffee ea next
                  level ethnic fingerstache fanny pack nostrud. Photo booth anim
                  8-bit hella, PBR 3 wolf moon beard Helvetica. Salvia esse
                  nihil, flexitarian Truffaut synth art party deep v chillwave.
                  Seitan High Life reprehenderit consectetur cupidatat kogi. Et
                  leggings fanny pack, elit bespoke vinyl art party Pitchfork
                  selfies master cleanse Kickstarter seitan retro. Drinking
                  vinegar stumptown yr pop-up artisan sunt. Deep v cliche lomo
                  biodiesel Neutra selfies.
                </p>
                <h4 className="p1">
                  <span className="s1">Coastal Adventures</span>
                </h4>
                <p className="p2">
                  Exercitation photo booth stumptown tote bag Banksy, elit small
                  batch freegan sed. Craft beer elit seitan exercitation, photo
                  booth et 8-bit kale chips proident chillwave deep v laborum.
                  Aliquip veniam delectus.
                </p>
                <div
                  id="attachment_3099"
                  style={{ width: "1450px" }}
                  className="wp-caption alignnone"
                >
                  <img
                    className="size-full wp-image-3099"
                    // src="http://themegoodsthemes-pzbycso8wng.stackpathdns.com/grandtour/demo2/wp-content/uploads/2016/12/pexels-photo-210243.jpeg"
                    alt=""
                    width="1440"
                    height="960"
                  />
                  <p className="wp-caption-text">
                    The road to success and the road to failure are almost
                    exactly the same
                  </p>
                </div>
                <h4 className="p1">
                  <span className="s1">Eating and Drinking</span>
                </h4>
                <p className="p2">
                  See-through delicate embroidered organza blue lining luxury
                  acetate-mix stretch pleat detailing. Leather detail shoulder
                  contrastic colour contour stunning silhouette working peplum.
                  Statement buttons cover-up tweaks patch pockets perennial
                  lapel collar flap chest pockets topline
                </p>
                <h4 className="p2">What to See and Do</h4>
                <p>
                  Foam padding in the insoles leather finest quality staple flat
                  slip-on design pointed toe off-duty shoe. Black knicker lining
                  concealed back zip fasten swing style high waisted double
                  layer full pattern floral. Polished finish elegant court shoe
                  work duty stretchy slingback strap mid kitten heel this
                  ladylike design.
                </p>
                <p>
                  <img
                    className="alignnone size-full wp-image-3560"
                    // src="http://themegoodsthemes-pzbycso8wng.stackpathdns.com/grandtour/demo2/wp-content/uploads/2017/07/pexels-photo-525544.jpeg"
                    alt=""
                    width="1440"
                    height="960"
                  />
                </p>
                <h4 className="p2">Where to Stay</h4>
                <p>
                  Meh synth Schlitz, tempor duis single-origin coffee ea next
                  level ethnic fingerstache fanny pack nostrud. Photo booth anim
                  8-bit hella, PBR 3 wolf moon beard Helvetica. Salvia esse
                  nihil, flexitarian Truffaut synth art party deep v chillwave.
                  Seitan High Life reprehenderit consectetur cupidatat kogi. Et
                  leggings fanny pack, elit bespoke vinyl art party Pitchfork
                  selfies master cleanse Kickstarter seitan retro. Drinking
                  vinegar stumptown yr pop-up artisan sunt. Deep v cliche lomo
                  biodiesel Neutra selfies.
                </p>
                <h4 className="p1">
                  <span className="s1">How to Get Around</span>
                </h4>
                <p className="p2">
                  Exercitation photo booth stumptown tote bag Banksy, elit small
                  batch freegan sed. Craft beer elit seitan exercitation, photo
                  booth et 8-bit kale chips proident chillwave deep v laborum.
                  Aliquip veniam delectus.
                </p>
                <div style={{ height: "10px" }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
     {/* <div id="side_menu_wrapper" className="overlay_background visible share_open">
          f asdf asdfasdf
    </div> */}
      </>
    )
  }
}
// export default SingleDestination;
SingleDestination.propTypes = {
  getTopDestination: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  place: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  place: state.place,
});

export default connect(mapStateToProps, { getPlace })(SingleDestination);
