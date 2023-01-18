import React, { useEffect } from "react";
import { mountRootParcel } from "single-spa";

const segmenterURL = "https://vormir-segmenter.instaleap.io/dist/js/app.js";
// const segmenterURL = "https://xandar-segmenter.instaleap.io/dist/js/app.js";
// const segmenterURL = "http://localhost:5173/src/main.js";
// const segmenterURL = "https://d36nirjs44ducv.cloudfront.net/singleSpaEntry.js";

const runScript = async (url) => {
  return new Promise((resolve, reject) => {
    const script = document.createElement("script");
    script.src = url;
    script.type = "module";
    script.id = "segmenter-module";
    script.onload = resolve;
    script.onerror = reject;
    const firstScript = document.getElementsByTagName("script")[0];
    firstScript.parentNode.insertBefore(script, firstScript);
  });
};

const loadApp = async (url, app) => {
  await runScript(url);
  return window[app];
};

const MFE = () => {
  useEffect(() => {
    const fetchBP = async () => {
      const domElement = document.getElementById("App-segmenter");
      const result = await loadApp(segmenterURL, "segmenter");
      //console.log(result);
      mountRootParcel(result, { domElement });
    };
    fetchBP();

    return () => {
      document.getElementById("segmenter-module").remove();
    };
  }, []);

  return (
    <div>
      <div id="App-segmenter"></div>
    </div>
  );
};

export default MFE;
