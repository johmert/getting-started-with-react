function TodoList({todos}){
    const rows = todos.map(({completed, task}, index) => (
        <tr key={index}>
            <td>{completed ? "Yes" : "No"}</td>
            <td>{task}</td>
        </tr>
    ));
    
    return (
        <table>
            <thead>
                <tr>
                    <th>Done?</th>
                    <th>Task</th>
                </tr>
            </thead>
            <tbody>{rows}</tbody>
        </table>
    );
}

export default TodoList;