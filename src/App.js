import React, { useState } from "react";
import styled from "styled-components";
import LeaksEverywhere from "./LeaksEverywhere";

const getRandomColor = () => {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

const App = () => {
  const [showColumn, setShowColumn] = useState(false);
  const [color, setColor] = useState("white");

  return (
    <div style={{ display: "flex" }}>
      <Column bgColor={color}>
        <h2>Column 1</h2>
      </Column>
      {showColumn && (
        <Column>
          <h2>Column 2</h2>
          <LeaksEverywhere callback={() => setColor(getRandomColor())} />
        </Column>
      )}
      <button
        style={{ fontSize: "18px", backgroundColor: "yellow" }}
        onClick={() => setShowColumn(oldVal => !oldVal)}
      >
        {showColumn ? "hide" : "show"}
      </button>
    </div>
  );
};

const Column = styled.div`
  flex-grow: 1;
  background-color: ${({ bgColor }) => bgColor || "white"};
`;

export default App;
