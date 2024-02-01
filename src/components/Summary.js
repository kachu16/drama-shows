import React from "react";
import { useLocation } from "react-router-dom";
import Form from "./Form";

const Summary = () => {
  const location = useLocation();
  const data = location.state;

  return (
    <div className="summary_box">
      <div className="summary">
        <div className="summary_detail">
            <h1><strong>Show Name : </strong>{data?.name}</h1>
            <p style={{fontSize:'16px'}} dangerouslySetInnerHTML={{ __html: data?.summary }}></p> 
        </div>

        <div>
          <img src={data?.image?.original}/>
        </div>
      </div>

      {/* Form  */}
      <Form movieName={data?.name}/>
    </div>
  );
};

export default Summary;
