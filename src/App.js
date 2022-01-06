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
}

function TodoList({todos}){
  const items = todos.map((item, index) => <li key={index}>{item}</li>);
  return <ul>{items}</ul>
}

const todos = [
  "Finish the Lists & Tables checkpoint",
  "Clean my desk",
  "Make lunch"
];


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
const groceryItems = [{quantity: 6, item: "Bananas"}, { quantity: 3, item: "Apples"}, { quantity: 10, item: "Oranges"}];
  return (
    <>
    <Greeting language="es" />
    <Greeting language="fr" />
    <Greeting />
    <WelcomeBack name={name}/>
    {element}
    <Notifications notifications={notifications} />
    <GroceryList items={groceryItems} />
    <TodoList todos={todos} />
    </>
    );
}

export default App;