import "./App.css";

function WelcomeBack(props) {
  return <p>Welcome back, {props.name}</p>
}

function App() {
  const name = "Jessica";
  const url = "https://johmert.github.io/portfolio";
  const linkText = "your portfolio"
  const element = (
    <p>
      {" "}
      Please visit <a href={url}>{linkText}</a>.
    </p>
  );
  return (
    <>
    <WelcomeBack name="Jessica"/>
    {element}
    </>
    );
}

export default App;