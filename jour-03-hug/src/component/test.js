import React from "react";

function Test(props) {
    const number1 = [1, 2, 3, 4, 5, 7];
    const lettre = ["joel", "jeff", "anais"];

    const map = number1.map((x) => x + 2);
    // console.log("map", map);

    const filter = lettre.filter((z) => z !== "joel");
    // console.log("filter", filter);

    // const pays = {
    //     nom: "Italie",
    //     pop: 50,
    // };

    // const {nom, pop} = pays;

    // const data = ({ nom, pop }) => nom + pop ;
    // console.log(data(pays));

    const arrNew = [1,2,3];
    const [a,b,c] = arrNew
    // console.log(a, b, c)

    return (
        <div>
            <ul>
                <li>{map}</li>
                <li>{filter[1]}</li>
                <li>{props.first}</li>
            </ul>
            <button onClick={props.func}>first</button>
        </div>
    );
}

export default Test;
