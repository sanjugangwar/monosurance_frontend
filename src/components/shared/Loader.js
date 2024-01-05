import { useState, CSSProperties } from "react";
import ClipLoader from "react-spinners/ClipLoader";

const override = {
    display: "block",
    margin: "0 auto",
    borderColor: "red",
};

const Loader = (data) => {
    let [loading, setLoading] = useState(data.data);
    let [color, setColor] = useState("#ffffff");
    console.log("loader", data);

    return (
        <div className="sweet-loading">
            {/* <button onClick={() => setLoading(!loading)}>Toggle Loader</button> */}
            {/* <input value={color} onChange={(input) => setColor(input.target.value)} placeholder="Color of the loader" /> */}

            <ClipLoader
                color={color}
                loading={data.data}
                cssOverride={override}
                size={30}
                aria-label="Loading Spinner"
                data-testid="loader"
            />
        </div>
    )
}

export default Loader