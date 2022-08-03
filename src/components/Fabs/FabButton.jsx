import React, { useState } from "react";
import fabOk from "./fabyea.png";
import noFab from "./fabnot.png";

const FabButton = () => {
  const [isFab, setIsFab] = useState(false);
  const handlePress = () => {
    setIsFab(!isFab);
    //posar o treure a la llista de fav
  };

  return (
    <div className="fab-button">
      <button onClick={() => handlePress}>
        {isFab ? (
          <img src={fabOk} alt="marked as fab icon" />
        ) : (
          <img src={noFab} alt="fab not marked icon" />
        )}
      </button>
    </div>
  );
};

export default FabButton;
