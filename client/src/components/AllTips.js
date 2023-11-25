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
      <div className="tips">
        <div className="head_tips">
          {" "}
          <th scope="col">Name</th>
          <th scope="col">Content</th>
          <th scope="col">Date & Likes</th>
          <th scope="col">Hide</th>
        </div>
        <div className="body_tips">
          {tips.map((tip) => (
            <div key={tip.id}>
              <OneTips tip={tip} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default AllTips;
