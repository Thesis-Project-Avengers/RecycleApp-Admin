import React, { useCallback, useEffect, useState } from "react";
import { FIREBASE_DB } from "../firebaseConfig";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import "../styles/OneTips.css";
const OneTips = ({ tip }) => {
  const [posterInfo, setPosterInfo] = useState({});

  const hideTip = async () => {
    const tipDocRef = doc(FIREBASE_DB, "tips", tip);

    try {
      await updateDoc(tipDocRef, { hideTip: true });
    } catch (error) {
      console.error("Error hiding tip:", error);
    }
  };
  useEffect(
    useCallback(() => {
      const userdocRef = doc(FIREBASE_DB, "users", tip?.posterId);
      getDoc(userdocRef).then((doc) => {
        setPosterInfo(doc.data());
      });
    }, [tip?.posterId])
  );

  return (
    <div className="onetip">
      <img src={posterInfo?.photoURL} />
      <div className="contentTip">
        <h5>{posterInfo?.displayName}</h5>
        <label>
          {tip.content?.length > 20
            ? tip.content?.slice(0, 20) + "....."
            : tip.content}
        </label>
      </div>
      <div className="contentTip">
        <label>
          {tip.createdAt?.toDate().toString().slice(15, 18) > 12
            ? tip.createdAt?.toDate().toString().slice(15, 21) + " PM"
            : tip.createdAt?.toDate().toString().slice(15, 21) + " AM"}
        </label>
        <h6>{tip.numlikes || 0}</h6>
      </div>
      {/* <div className='all_Btn_Tips'> */}
      <button className="btn-tips" onClick={hideTip}>
        Hide
      </button>
      {/* </div> */}
    </div>
  );
};

export default OneTips;
