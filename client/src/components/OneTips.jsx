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
    <tr className="oneTip">
      <td>
        <img className="img_tip" src={posterInfo?.photoURL} />
      </td>
      <td>
        <h5>{posterInfo?.displayName}</h5>
      </td>
      <td>
        <h5> {tip.content?.length > 20
          ? tip.content?.slice(0, 20) + "....."
          : tip.content}</h5>
      </td>

      <td>
        <label className="date_tip">
          {tip.createdAt?.toDate().toString().slice(15, 18) > 12
            ? tip.createdAt?.toDate().toString().slice(15, 21) + " PM"
            : tip.createdAt?.toDate().toString().slice(15, 21) + " AM"}
        </label>
      </td>
      <td>
        <h6>{tip.numlikes || 0}</h6>
      </td>
      <td>
        <button className="btn-tips" onClick={hideTip}>
          Hide
        </button>
      </td>

      {/* <button className="btn-tips" onClick={() => editTip("Updated content")}>Edit</button> */}

    </tr>
  );
};

export default OneTips;
