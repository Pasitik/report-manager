import React, { useEffect, useState } from "react";
import firebase from "firebase";

export default function TrafficLights() {
  const db = firebase.firestore();
  const [pending, setPending] = useState(0);

  useEffect(function () {
    sum();
  });

  async function sum() {
    var traffic = await getTraffic();

    var sum = traffic;
    return await setPending(sum);
  }

  async function getTraffic() {
    var snapShot = await db.collection("Traffic").get();

    return snapShot.docs.length;
  }
  return <h1>{pending}</h1>;
}
