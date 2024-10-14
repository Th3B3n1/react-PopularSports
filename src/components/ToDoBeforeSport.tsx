interface ToDoBeforeSport
{
    todos: Array<string>[]
}

export function ToDoBeforeSport(props: ToDoBeforeSport)
{
    return (
        <section className="mb-5">
            <h2>Teendők sportolás előtt</h2>
            <ol className="list-group list-group-numbered">
                {props.todos.map((todo, index) =>
                (
                    <li key={index} className="list-group-item">{todo}</li>
                ))}
            </ol>
        </section>
    )
}