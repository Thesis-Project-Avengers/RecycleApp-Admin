import React, { useCallback, useEffect, useState } from "react";
import { FIREBASE_DB } from "../firebaseConfig";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import "../styles/OneTips.css";
const OneTips = ({ tip }) => {
  const [posterInfo, setPosterInfo] = useState({});
  const fetchPosterInfo = () => {
    const userdocRef = doc(FIREBASE_DB, "users", tip?.posterId);
    console.log("I m H ere Bezlhas started")
    getDoc(userdocRef).then((doc) => {
      setPosterInfo(doc.data());
    });
  }
  useEffect(() => {
    fetchPosterInfo()
  }, [])
  //! This function causes an infinte loop and crahsed the sever of the firebase be careful we have fixed it Ok !!!
  const hideTip = async () => {
    if (tip) {
      const tipDocRef = doc(FIREBASE_DB, "Tips", tip.id);
      try {
        await updateDoc(tipDocRef, { hideTip: true });
      } catch (error) {
        console.error("Error hiding tip:", error);
      }
    }
  };
  // const editTip = async ( updatedContent) => {
  //   const tipDocRef = doc(FIREBASE_DB, "Tips", tip.id);
  //   try {
  //     await updateDoc(tipDocRef, { content: updatedContent });

  //   } catch (error) {
  //     console.error("Error editing tip:", error);
  //   }
  // };
  return (
    <div className="onetip">
      <img className="img_tip" src={posterInfo?.photoURL} />
      <div className="name_content">
        <h5>{posterInfo?.displayName}</h5>
        <label>
          {tip.content?.length > 20
            ? tip.content?.slice(0, 20) + "....."
            : tip.content}
        </label>
      </div>
      <div className="contentTip">
        <label className="date_tip">
          {tip.createdAt?.toDate().toString().slice(15, 18) > 12
            ? tip.createdAt?.toDate().toString().slice(15, 21) + " PM"
            : tip.createdAt?.toDate().toString().slice(15, 21) + " AM"}
        </label>
        <h6>{tip.numlikes || 0}</h6>
      </div>
      <div className="Tip_btns">
        <button className="btn-tips" onClick={hideTip}>
          Hide
        </button>
        {/* <button className="btn-tips" onClick={() => editTip("Updated content")}>Edit</button> */}
      </div>
    </div>
  );
};

export default OneTips;
