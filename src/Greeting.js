import "./Greeting.css"

function Greeting({ language }) {
    const hStyle = {
        color: "white",
        fontFamily: "sans-serif",
        padding: "2px 4px",
        backgroundColor: "green"
    };


    switch (language) {
        case "es":
            return <h1 style={hStyle}>Hola!</h1>;
        case "fr":
            return <h1 style={hStyle}>Bonjour!</h1>;
        case "en":
            return <h1 style={hStyle}>Hello!</h1>
        default:
            return <h1 style={hStyle}>Hello!</h1>;
    }
}

export default Greeting;