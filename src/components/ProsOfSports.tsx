import { useEffect, useState } from "react"

export function ProsOfSports()
{
    const [pros, setPros] = useState([]);
    useEffect(() =>
    {
        fetch("ProsOfSports.json")
        .then(response => response.json())
        .then(data => setPros(data));
    })
    return (
        <section className="mb-5">
            <h2>A sportok előnyei</h2>
            <ul className="list-group">
                {pros.map((pro, index) =>
                (
                    <li key={index} className="list-group-item">{pro}</li>
                ))}
            </ul>
        </section>
    )
}