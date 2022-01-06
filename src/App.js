import "./App.css";
import Greeting from "./Greeting";
import GroceryList from "./GroceryList";

function WelcomeBack(props) {
  return <p>Welcome back, {props.name}</p>
}

function Notifications({ notifications }) {
  return (
    notifications.length > 0 && (
      <p>You have {notifications.length} notification(s) today!</p>
    )
  );
  /*
  if(notifications.length > 0){
    return <p>You have {notifications.length} notification(s) today!</p>;
  }
  return null;
  */
}


function App() {
  const notifications = ["You received a package", "The weather is sunny"];
  const name = "Jessica";
  const url = "https://johmert.github.io/portfolio";
  const linkText = "your portfolio"
  const element = (
    <p>
      {" "}
      Please visit <a href={url}>{linkText}</a>.
    </p>
  );
  const groceryItems = ["Bananas", "Apples", "Oranges"];
  return (
    <>
    <Greeting language="es" />
    <Greeting language="fr" />
    <Greeting />
    <WelcomeBack name={name}/>
    {element}
    <Notifications notifications={notifications} />
    <GroceryList items={groceryItems} />
    </>
    );
}

export default App;