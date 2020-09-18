import React from "react";
import CollectionItem from "../../components/collection-item/collection-item.component";

import { connect } from "react-redux";
import { selectCollection } from "../../redux/shop/shop.selectors.js";
import "./collection.styles.scss";

const CollectionPage = ({ collection }) => {
  const { title, items } = collection;
  return (
    <div className="collection-page">
      <h2 className="title">{title}</h2>
      <div className="items">
        {items.map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  //ownProps e match-ul
  collection: selectCollection(ownProps.match.params.collectionId)(state), //console.log(match.params.collectionId) returneaza hats,snakers etc
});
export default connect(mapStateToProps)(CollectionPage);
