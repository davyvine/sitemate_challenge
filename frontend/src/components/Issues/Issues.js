import React, { useState } from "react";
import axios from "axios";
import ShowIssues from "./ShowIssues";

const Issues = () => {
   const [input, setInput] = useState({
      title: "",
      description: "",
   });

   const submitHandler = async () => {
      try {
         let resp = await axios.create({ baseURL: `http://localhost:5003` }).post(`/issues`, input);
         console.log(resp.data);
      } catch (e) {
         console.log(e);
      }
   };

   return (
      <div className="container">
         <div className="mb-2">
            <h3>Create Issue</h3>
            <div>
               <label> Title</label>
               <input
                  className="form-control"
                  value={input.title}
                  name="title"
                  onChange={(e) => setInput({ ...input, [e.target.name]: e.target.value })}
               />
            </div>
            <div>
               <label> Description</label>
               <input
                  className="form-control"
                  value={input.description}
                  name="description"
                  onChange={(e) => setInput({ ...input, [e.target.name]: e.target.value })}
               />
            </div>
         </div>
         <button className="btn btn-primary" onClick={submitHandler}>
            Submit
         </button>

         <div className="mt-5">
            <ShowIssues />
         </div>
      </div>
   );
};

export default Issues;
