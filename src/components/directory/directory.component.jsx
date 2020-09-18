import React from "react";
import { connect } from "react-redux";
import { selectSections } from "../../redux/directory/directory.selectors.js";

import MenuItem from "../menu-item/menu-item.component.jsx";

import "./directory.styles.scss";

const Directory = ({ sections }) => {
  return (
    <div className="directory-menu">
      {sections.map(({ title, id, imageUrl, size, linkUrl }) => (
        <MenuItem
          key={id}
          title={title}
          imageUrl={imageUrl}
          size={size}
          linkUrl={linkUrl}
        />
      ))}
    </div>
  );
};
const mapStateToProps = (state) => ({
  sections: selectSections(state),
});
export default connect(mapStateToProps)(Directory);
