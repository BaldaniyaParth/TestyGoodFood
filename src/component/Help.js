import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { FAQ } from "../utils/Contant";

const Section = ({ title, description, isVisible, setIsVisible }) => {
  return (
    <div
      className="section-container"
      onClick={() => setIsVisible(!isVisible)}
    >
      <div className="section-header">
        <h3 className="section-title">{title}</h3>
        <FontAwesomeIcon
          icon={isVisible ? faChevronUp : faChevronDown}
          className="arrow"
        />
      </div>
      {isVisible && <p className="section-description">{description}</p>}
    </div>
  );
};

const Help = () => {
  const [visibleSection, setVisibleSection] = useState("");

  return (
    <div className="help-container">
      <h1 className="help-title">FAQs</h1>
      {FAQ.map((question) => (
        <Section
          key={question.id}
          title={question.title}
          description={question.description}
          isVisible={visibleSection === question.id}
          setIsVisible={(param) =>
            setVisibleSection(param ? question.id : "")
          }
        />
      ))}
    </div>
  );
};

export default Help;
