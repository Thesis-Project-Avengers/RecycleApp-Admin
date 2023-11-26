import React, { useEffect, useState } from "react";
import SideBar from "../components/SideBar";
import AllUsers from "../components/AllUsers";
import { FIREBASE_DB } from "../firebaseConfig";
import {
  collection,
  doc,
  getDocs,
  onSnapshot,
  query,
  updateDoc,
} from "firebase/firestore";

const Users = () => {
  const [view, setView] = useState("allusers");
  const [users, setUsers] = useState([]);

  const changeView = (newView) => {
    setView(newView);
  };

  const fetchUsers = async () => {
    try {
      const usersReference = collection(FIREBASE_DB, "users");
      const q = query(usersReference);
      const unsubscribe = onSnapshot(q, (snapshot) => {
        let users = [];
        snapshot.docs.forEach((doc) => {
          users.push({ ...doc.data(), id: doc.id });
        });
        console.log("done");
        setUsers(users);
        console.log(users);
      });
    } catch (error) {
      console.log(error);
    }
  };

  const accumulatorFilter = async () => {
    try {
      const usersReference = collection(FIREBASE_DB, "users");
      const q = query(usersReference);
      const unsubscribe = onSnapshot(q, (snapshot) => {
        let users = [];
        snapshot.docs.forEach((doc) => {
          if (doc.data()?.type === "accumulator") {
            users.push({ ...doc.data(), id: doc.id });
          }
        });
        setUsers(users);
      });
    } catch (error) {
      console.log(error);
    }
  };
  const collectorFilter = async () => {
    try {
      const usersReference = collection(FIREBASE_DB, "users");
      const q = query(usersReference);
      let users = [];
      await getDocs(q).then((snapshot) => {
        snapshot.docs.forEach((doc, index) => {
          if (doc.data()?.type === "collector") {
            users.push({ ...doc.data(), id: doc.id });
          }
        });
        setUsers(users);
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div>
      <SideBar view={view} changeView={changeView} />
      <AllUsers
        view={view}
        changeView={changeView}
        users={users}
        fetchUsers={fetchUsers}
        accumulatorFilter={accumulatorFilter}
        collectorFilter={collectorFilter}
      />
    </div>
  );
};

export default Users;
