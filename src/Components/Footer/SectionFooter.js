import React from "react";

function SectionFooter({ title, children }) {
  return (
    <div class="col-4">
      <div class="footer-widgets__item">
        <span class="footer-widgets__title">{title}</span>
        {children}
      </div>
    </div>
  );
}

export default SectionFooter;
