
import { useState } from "react";

export default function Batsman() {

    const [run, setRun] = useState(0);

    const handle6 = () => {

        const add6 = run + 6;
        setRun(add6);

    }
    const handle4 = () => {

        const add4 = run + 4;
        setRun(add4);

    }

    return (

        <div>
            <h2>Batsman: Shakib All Hasan</h2>

            {
                run >= 50 && <p>your run is 50.</p>
            }

            <h1>Score: {run}</h1>

            <div>
                <button>Run 1</button>
                <button>Run 2</button>
                <button>Run 3</button>
                <button onClick={handle4}>Run 4</button>
                <button onClick={handle6}>Run 6</button>
            </div>
        </div >


    )
}