import React, { useEffect, useState } from "react";
import firebase from "firebase";

export default function StreetLight() {
  const db = firebase.firestore();
  const [pending, setPending] = useState(0);

  useEffect(function () {
    sum();
  });

  async function sum() {
    var light = await getLights();

    var sum = light;
    return await setPending(sum);
  }

  async function getLights() {
    var snapShot = await db.collection("Street_lights").get();
    return snapShot.docs.length;
  }
  return <h1>{pending}</h1>;
}
