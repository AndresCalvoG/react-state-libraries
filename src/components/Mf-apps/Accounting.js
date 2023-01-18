/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect } from "react";
import { mountRootParcel } from "single-spa";

const blackPantherURL =
  "https://d36nirjs44ducv.cloudfront.net/singleSpaEntry.js";

const runScript = async (url) => {
  return new Promise((resolve, reject) => {
    const script = document.createElement("script");
    script.src = url;
    script.id = "black-panther-module";
    script.onload = resolve;
    script.onerror = reject;
    const firstScript = document.getElementsByTagName("script")[0];
    firstScript.parentNode.insertBefore(script, firstScript);
  });
};

const loadApp = async (url, app) => {
  const result = await runScript(url);
  console.log(result);
  return window[app];
};

const MFE = () => {
  useEffect(() => {
    const fetchBP = async () => {
      const domElement = document.getElementById("App-bp");
      const result = await loadApp(blackPantherURL, "accounting");
      console.log(result);
      mountRootParcel(result, { domElement });
    };
    fetchBP();

    return () => {
      document.getElementById("black-panther-module").remove();
    };
  }, []);

  return (
    <div>
      <div id="App-bp"></div>
    </div>
  );
};

export default MFE;
