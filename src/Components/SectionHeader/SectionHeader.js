import React from "react";

import "./SectionHeader.css";
function SectionHeader({ title, desc, allTitle }) {
  return (
    <div class="courses-header">
      <div class="courses-header__right">
        <span class="courses-header__title title">{title}</span>
        <span class="courses-header__text">{desc}</span>
      </div>
      <div class="courses-header__left">
        {allTitle ? (
          <a href="#" class="courses-header__link">
            {allTitle}
            <i class="fas fa-arrow-left courses-header__icon"></i>
          </a>
        ) : null}
      </div>
    </div>
  );
}

export default SectionHeader;
