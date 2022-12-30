import React from "react";
import "./CardWork.css";
import CardWork from "./CardWork";
import WorkData from "./WorkData";

const Work = () => {
  return (
    <div className="Work_container">
      <h1 className="project_heading">Projects</h1>
      <div className="project_contianer">
        {WorkData.map((val, ind) => {
          return (
            <CardWork
              key={ind}
              imgsrc={val.imgsrc}
              title={val.title}
              text={val.text}
              view={val.view}
              source={val.source}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Work;
