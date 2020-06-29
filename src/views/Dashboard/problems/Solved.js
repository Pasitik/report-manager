import React, { useEffect, useState } from "react";
import firebase from "firebase";

export default function Solved() {
  const db = firebase.firestore();
  const [pending, setPending] = useState(0);
  const [Traffic_Lights, setTraffic_Lights] = useState(0);
  const [Street_Lights, SetStreet_Lights] = useState(0);
  const [PotHoles, SetPotHoles] = useState(0);

  useEffect(function () {
    sum();
  });

  async function sum() {
    var car = await getCar();
    var potholes = await getPotholes();
    var light = await getLights();
    var traffic = await getTraffic();

    var sum =  car + potholes + light + traffic;
    return await setPending(sum);
  }
  async function getCar() {
    var snapShot = await db.collection("SolvedBreakdown").get();
    return snapShot.docs.length;
  }
  async function getPotholes() {
    var snapShot = await db.collection("SolvedPotholes").get();
    return snapShot.docs.length;
  }
  async function getLights() {
    var snapShot = await db.collection("SolvedLights").get();
    return snapShot.docs.length;
  }
  async function getTraffic() {
    var snapShot = await db.collection("SolvedTraffic").get();

    return snapShot.docs.length;
  }
  return <h1>{pending}</h1>;
}
