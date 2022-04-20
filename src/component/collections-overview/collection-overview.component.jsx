import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import CollectionPreview from "../collection-preview/collection-preview.component";
import {selectCollections }from '../../redux/shop/shop.selector';

import '../collections-overview/collection-overview.styles.scss';



const CollectionOverview = ({collections}) => (
    <div className="collections-overview" >
         {collections.map(({id, ...otherSectionProps}) => (
                        <CollectionPreview key={id} {...otherSectionProps} />
                    ))}

    </div>
);

const mapStateToProps = createStructuredSelector({
    collections: selectCollections
  });   

export default connect(mapStateToProps) (CollectionOverview);