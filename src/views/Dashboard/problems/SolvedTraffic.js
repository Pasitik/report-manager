import React, { useEffect, useState } from "react";
import firebase from "firebase";

export default function SolvedTraffic() {
  const db = firebase.firestore();
  const [solved, setSolved]= useState(0);

  useEffect(function () {
    sum();
  });

  async function sum() {
    var potholes = await getSolvedTraffic();

    var sum = potholes;
    return await setSolved(sum);
  } 

  async function getSolvedTraffic() {
    var snapShot = await db.collection("SolvedTraffic").get();
    return snapShot.docs.length;
  }

  return <h1>{solved}</h1>;
}
