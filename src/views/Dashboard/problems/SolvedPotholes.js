import React, { useEffect, useState } from "react";
import firebase from "firebase";

export default function SolvedPotholes() {
  const db = firebase.firestore();
  const [solved, setSolved]= useState(0);

  useEffect(function () {
    sum();
  });

  async function sum() {
    var potholes = await getSolvedPotholes();

    var sum = potholes;
    return await setSolved(sum);
  } 

  async function getSolvedPotholes() {
    var snapShot = await db.collection("SolvedPotholes").get();
    return snapShot.docs.length;
  }

  return <h1>{solved}</h1>;
}
