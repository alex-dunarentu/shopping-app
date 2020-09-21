import React from "react";
import ColletionItem from "../collection-item/collection-item.component";
import { Link } from "react-router-dom";
import "./collection-preview.styles.scss";

const CollectionPreview = ({ title, items }) => (
  <div className="collection-preview">
    <Link to={`/shop/${title.toLowerCase()}`}>
      <h1 className="title">{title.toUpperCase()}</h1>
    </Link>
    <div className="preview">
      {items
        .filter((item, idx) => idx < 4) //making sure no more than 4 is displayed
        .map((item) => (
          <ColletionItem key={item.id} item={item} />
        ))}
    </div>
    <div className="preview-option">
      <Link to={`/shop/${title.toLowerCase()}`}>
        <span>see all items...</span>
      </Link>
    </div>
  </div>
);

export default CollectionPreview;
