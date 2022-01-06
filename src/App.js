import React, { useState } from "react";
import "./App.css";
import Greeting from "./Greeting";
import GroceryList from "./GroceryList";
import Notifications from "./Notifications";
import TodoList from "./TodoList"
import Quote from "./Quote";
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
  {completed: true, task: "Finish the Lists & Tables checkpoint"},
  {completed: false, task: "Clean my desk"},
  {completed: false, task: "Make lunch"}
];

const quote = {
  text: "I am a great believer in luck, and I find the harder I work, the more I have of it.", author: "Thomas Jefferson"
};

const handleClick = () => {
  for(let i=0; i<notifications.length; i++){
    alert(`Notification ${[i+1]} of ${notifications.length}: ${notifications[i]}`);
  }
};

function App() {
  const [subscribed, setSubscribed] = useState(false);
  console.log("Subscribed status: ", subscribed);  
  return (
    <div style={{ border: "1px solid #000", textAlign: "center", borderRadius: "20px" }}>
      <Greeting language="es" />
      <Greeting language="fr" />
      <Greeting />
      <WelcomeBack name={name}/>
      {element}
      <Quote quote={quote} />
      <Notifications notifications={notifications} />
      <button onClick={handleClick}>View Notifications</button>
      <p style={{marginTop: "20px"}}>Subcribe for more updates!</p>
      <button onClick={() => setSubscribed(!subscribed)}>{subscribed ? "Unsubscribe" : "Subscribe"}</button>
      <GroceryList items={groceryItems} />
      <TodoList todos={todos} />
    </div>
    );
}

export default App;