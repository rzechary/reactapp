import React, { useState } from 'react'

export default function AppTask() {
    const [coins, setCoins] = useState(5);
    const [color, setColor] = useState("green");
    const [ans, setAns] = useState("");
    const [rnd, setRnd] = useState(1);


    const rollDice = () => {
        if (coins > 0) {
            let r = Math.ceil(Math.random() * 6);
            setRnd(r);
            console.log(rnd);
            if (rnd == 5 || rnd == 6) {
                setCoins(coins + 1);
                setAns("you win");
                setColor("green")
                
            }
            else {
                setCoins(coins- 1);
                setAns("you lose");
                setColor("red ")
                
            }

        } else {
            alert("you need give money from the bank");
            setCoins(0);
        }
    }
    return (
        <div className='container '>
            <h1 style={{color: "green"}}>WELCOME TO OUR KAZINO!</h1>
            <h2>coins: {coins}</h2>
            <img src={`/dice_images/dice${rnd}.jpg`} alt="dice" width="150" />
            <br />
            <h2 style={{ color: color }}>{ans}</h2>
            <button className=" btn btn-info border" onClick={rollDice}><strong>Roll</strong></button>

        </div>
    )
}
