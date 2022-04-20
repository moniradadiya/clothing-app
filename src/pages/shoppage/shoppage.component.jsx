import React from "react";
import { Route } from "react-router-dom";



import './shoppage.style.scss';
import CollectionOverview from "../../component/collections-overview/collection-overview.component";
// import CollectionPage from '../collection/collection.style.scss';
 
const ShopPage = ({ match }) => (
        <div className="shop-page">
                <CollectionOverview />

        {/* <Route exact path={`${match.path}`} component={CollectionOverview}/> */}
        {/* <Route path={`${match.path}/:CollectionId`} component={CollectionPage}/> */}
        </div>
);
   
export default ShopPage;