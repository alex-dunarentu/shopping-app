import React from "react";
import ColletionItem from "../collection-item/collection-item.component"; 
import "./collection-preview.styles.scss";


const CollectionPreview = ({ title, items }) => (
  <div className="collection-preview">
    <h1 className="title">{title.toUpperCase()}</h1>
    <div className="preview">
      {items
        .filter((item, idx) => idx < 4) //making sure no more than 4 is displayed
        .map(({ id, ...otherItemProps }) => (
          <ColletionItem key={id} {...otherItemProps} />
        ))}
    </div>
  </div>
);

export default CollectionPreview;
