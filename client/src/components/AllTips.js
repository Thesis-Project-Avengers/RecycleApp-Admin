import React from "react";
import OneTips from "./OneTips";
import "../styles/AllTips.css";
const AllTips = ({ tips }) => {
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
            <th scope="col">Reporter id</th>
            <th scope="col">Reported id</th>
            <th scope="col">date</th>
          </tr>
        </thead>
        <tbody>
         {
          tips.map((tip)=>{
            return <OneTips tip={tip}/>
          })
         }

        </tbody>
      </table>
    </div>
  );
};
export default AllTips;
