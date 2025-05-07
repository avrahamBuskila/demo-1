//import React from 'react'//לא צריך לייצא אותו בצורה הרגילה
import GrandChild from "./GrandChild";

export default function Child(props) {
  return (
    <>
      <div>רכיב בן</div>  

      //props דרך להעביר מידע מרכיב אבא לרכיב בן
      <h2>שם שמועבר מרכיב אבא לרכיב בן עי פרופס: {props.nameFromParent}</h2>

      <GrandChild /> 
      


    </>
  );
}



