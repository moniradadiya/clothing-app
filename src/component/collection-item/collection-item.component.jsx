import React from "react";

 import '../../component/collection-item/collection-item.style.scss';

 const CollectionItem = ({id, name, price, imageUrl}) => {
    
     return (
        <div className="collection-item">
            <div
             className="image"
             style={{
                 backgroundImage: `url(${process.env.PUBLIC_URL + imageUrl})`
             }}
             />
                 <div className="collection-footer">
                     
                      <span className="name">{name}</span>
                     <span className="price">{price}</span> 
 
                 </div>
         </div> 
  );
 }

 export default CollectionItem;