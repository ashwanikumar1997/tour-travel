/**
 * @author Mohit Sharma
 * @email mohitsharma@inimist.com
 * @create date 2019-09-03 10:51:12
 * @modify date 2019-09-03 10:51:12
 * @desc [description]
 */
import React from 'react';
import ElementGrid from '../commonwidget/packagegrid';

const elements = ['1', '2', '3', '4', '5', '6', '7', '8'];
const items = []
const place = '';

console.log(this.props);
for (const [index, value] of elements.entries()) {
    items.push(<ElementGrid place={this.props} />)
}

const TopPackages = (place) => {
    return (
        <div className="ppb_tour_classic one nopadding " style={{ marginBottom: '50px' }}>
            <div className="page_content_wrapper page_main_content sidebar_content full_width fixed_column">
                <div className="standard_wrapper">
                    <div id="1565323702552895033" className="portfolio_filter_wrapper gallery classic four_cols" data-columns="4">
                        {items}
                    </div>
                </div>
            </div>
        </div>
    )
}
export default TopPackages;
