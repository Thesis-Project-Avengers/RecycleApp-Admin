import React from "react";
import OneTips from "./OneTips";
import "../styles/AllTips.css";
const AllTips = ({ tips,fetchTips }) => {
  return (
    <div className="allTipsContent">
      <div className="tips-number">
        <h5 className="tipsAll">Tips</h5>
        <label className="tipsAll">{tips.length}</label>
      </div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">username</th>
            <th scope="col">content</th>
            <th scope="col">add time</th>
            <th scope="col">likes</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
         {
          tips.map((tip)=>{
            return <OneTips tip={tip} fetchTips={fetchTips}/>
          })
         }

        </tbody>
      </table>
    </div>
  );
};
export default AllTips;
