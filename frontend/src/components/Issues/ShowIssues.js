import React, { useState } from "react";
import axios from "axios";

const ShowIssues = () => {
   const [data, setData] = useState(null);

   const submitHandler = async () => {
      try {
         let resp = await axios.create({ baseURL: `http://localhost:5003` }).get(`/issues`);
         console.log(resp);
         setData(resp.data);
      } catch (e) {
         console.log(e);
      }
   };

   return (
      <div className="container">
         <button className="btn btn-primary" onClick={submitHandler}>
            Show Issues
         </button>
         <div className="mt-4">{JSON.stringify(data)}</div>
      </div>
   );
};

export default ShowIssues;
