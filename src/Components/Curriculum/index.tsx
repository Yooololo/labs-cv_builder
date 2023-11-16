import { useLocation } from "react-router-dom";
import Page from "../Page";

const Curriculum = () => {
  const location = useLocation();
  const cvData = location.state?.cvData || {};

  return (
    <div>
      <h1>Your Curriculum Vitae</h1>
      <pre>{JSON.stringify(cvData, null, 2)}</pre>
      <Page />
    </div>
  );
};

export default Curriculum;
