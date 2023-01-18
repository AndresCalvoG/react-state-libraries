import React, { useState, useEffect } from "react";
import Accounting from "../Mf-apps/Accounting";
import Segmenter from "../Mf-apps/Segmenter";

function Screens(props) {
  const [state, setState] = useState({
    viewToShow: "state component",
  });

  useEffect(() => {
    const getView = ({ view }) => {
      switch (view) {
        case "accounting":
          return <Accounting />;
        case "segmenter":
          return <Segmenter />;
        default:
      }
    };
    setState({ viewToShow: getView(props) });
  }, []);

  return <main>{state.viewToShow}</main>;
}

export default Screens;
