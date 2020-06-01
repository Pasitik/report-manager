import React, { useEffect, useState } from "react";
import firebase from "firebase";

export default function Potholes() {
  const db = firebase.firestore();
  const [pending, setPending] = useState(0);

  useEffect(function () {
    sum();
  });

  async function sum() {
    var potholes = await getPotholes();

    var sum = potholes;
    return await setPending(sum);
  }

  async function getPotholes() {
    var snapShot = await db.collection("Potholes").get();
    return snapShot.docs.length;
  }
  return <h1>{pending}</h1>;
}
