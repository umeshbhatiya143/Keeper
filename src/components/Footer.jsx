import React from "react";

function footer() {
  const date = new Date();
  const currentYear = date.getFullYear();

  return (
    <div>
      <footer>
        <p>copyright © {currentYear}</p>
      </footer>
    </div>
  );
}

export default footer;
