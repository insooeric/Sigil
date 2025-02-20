import React from "react";

const Restriction: React.FC = () => {
  return (
    <div className="inner-content">
      <h1>Restriction</h1>
      <p>
        This application can be used in other personal project to display
        badges; However, since it's built specifically for displaying badges,
        following restrictions are applied:
      </p>
      <ol>
        <li>The output is always formatted in .svg.</li>
        <li>
          The the height of svg will always be 40 pixels and the width will be
          determined based on the dimension of original image.
        </li>
        <li>
          For any image you store, it will automatically resize to the height of
          100 pixels and the width will be determined based on the dimension for
          storage efficiency.
        </li>
      </ol>

      <div className="end-of-content" />
    </div>
  );
};

export default Restriction;
