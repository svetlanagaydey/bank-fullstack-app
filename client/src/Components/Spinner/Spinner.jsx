import { useState } from "react";
import { css } from "@emotion/react";
import ScaleLoader from "react-spinners/ScaleLoader";

// Can be a string as well. Need to ensure each key-value pair ends with ;
const override = css`
  display: block;
  margin: 0 auto;
  border-color: rgb(21, 46, 82);
`;

const Spinner = () =>  {
  let [loading, setLoading] = useState(true);
  let [color, setColor] = useState("rgb(21, 46, 82)");

  return (
    <div className="sweet-loading">
      <ScaleLoader color={color} loading={loading} css={override} size={15} />
    </div>
  );
}

export default Spinner;