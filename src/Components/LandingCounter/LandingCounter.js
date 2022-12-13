import React, { useEffect, useState } from "react";

function LandingCounter({ limitCounter }) {
  const [landingCounter, setLandingCounter] = useState(0);

  useEffect(() => {
    let interval = setInterval(() => {
      setLandingCounter((p) => p + 1);
    }, 1);
    if (landingCounter === limitCounter) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [landingCounter]);
  return <span class="landing-status__count">{landingCounter}</span>;
}

export default LandingCounter;
