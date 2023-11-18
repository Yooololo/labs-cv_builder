import { useState } from "react";
import { useLocation } from "react-router-dom";
import Page from "../Page";

const Curriculum = () => {
  const location = useLocation();
  const cvData = location.state?.cvData || {};
  const [isVisible, setIsVisible] = useState(true);

  const toggleVisibility = () => {
    setIsVisible((prevVisible) => !prevVisible);
  };

  return (
    <div>
      <button onClick={toggleVisibility}>
        {isVisible ? "Hide CV Data" : "Show CV Data"}
      </button>

      {isVisible && (
        <>
          <h1>Your Curriculum Vitae</h1>
          <pre>{JSON.stringify(cvData, null, 2)}</pre>
        </>
      )}
      <Page data={cvData} />
    </div>
  );
};

export default Curriculum;
