import React, { useState } from "react";
import "./machine.css";
const Machine = () => {
  const arr1 = ["🍉", "🍏", "🍊", "🍒", "🍓", "😍"];
  const arr2 = ["🍉", "🍏", "🍊", "🍒", "🍓", "😍"];
  const arr3 = ["🍉", "🍏", "🍊", "🍒", "🍓", "😍"];

  const randomindex = () => {
    return Math.floor(Math.random() * arr1.length);
  };

  // setting elements to show initially to user
  const [ar1, setar1] = useState(arr1[randomindex()]);
  const [ar2, setar2] = useState(arr2[randomindex()]);
  const [ar3, setar3] = useState(arr3[randomindex()]);
  const [chances, setchances] = useState(5);
  const [money, setmoney] = useState(500);

  //check index function return the index where elements(fruit) is found
  const checkindex = (elm) => {
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] === elm) {
        return i;
      }
    }
  };

  //jackpot checking
  const jackpot = () => {
    const index1 = checkindex(ar1);
    const index2 = checkindex(ar2);
    const index3 = checkindex(ar3);
    console.log(index1, index2, index3);
    if (index1 === index2 && index1 === index3) {
      alert("congrats you won a jackpot");
    }
  };

  //setting array 
  const setArray = () => {
    setar1(arr1[randomindex()]);
    setar2(arr2[randomindex()]);
    setar3(arr3[randomindex()]);
  }

  //reshuffling the arrays
  const reshuffel = () => {
    if (chances > 0) {
      setArray();
      setmoney(money - 100);
    } else {
      alert("your chances are over");
    }

    //checking for array elements to be equal or not
    jackpot();
    //decreasing chances
    setchances(chances - 1);
  };

  //reseting the function
  const refresh = () => {
    setArray();
    alert("resetting ....");
    setchances(5);
    setmoney(500);

  };

  return (
    <section className="Machine-layout">
      <div className="Machine_items">
        <h1>{ar1}</h1>
        <h1>{ar2}</h1>
        <h1>{ar3}</h1>
      </div>
      <h2 className="macine_money">$ {money}</h2>
      <div className="button_container">
        <button onClick={refresh} style={{ backgroundColor: "red" }}>
          Reset
        </button>
        <button onClick={reshuffel} style={{ backgroundColor: "green" }}>
          Retry
        </button>
      </div>
    </section>
  );
};

export default Machine;
