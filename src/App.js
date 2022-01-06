import "./App.css";
import Greeting from "./Greeting";
import GroceryList from "./GroceryList";
import Notifications from "./Notifications";
import TodoList from "./TodoList"
import WelcomeBack from "./WelcomeBack";

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

const todos = [
  {completed: false, task: "Finish the Lists & Tables checkpoint"},
  {completed: false, task: "Clean my desk"},
  {completed: false, task: "Make lunch"}
];


function App() {
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