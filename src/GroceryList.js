function GroceryList({items}){
    const list = items.map(item => <li>{item}</li>);
    return <ul>{list}</ul>;
}

export default GroceryList;