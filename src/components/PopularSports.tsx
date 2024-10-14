import { useEffect, useState } from "react"

interface PopularSports
{
    id: number
    sport: string
    numberOfPlayers: string
    properties: string
}

export function PopularSports()
{
    const [sports, setSports] = useState([] as PopularSports[]);
    useEffect(() =>
    {
        fetch("/PopularSports.json")
        .then(response => response.json())
        .then(data => setSports(data));
    }, []);
    return (
        <div className="table-responsive">
            <section className="mb-5">
                <h2>Népszerű sportok</h2>
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Sportág</th>
                            <th>Játékosok száma</th>
                            <th>Főbb jellemzők</th>
                        </tr>
                    </thead>
                    <tbody>
                        {sports.map((sport, index) => 
                        (
                            <tr key={index}>
                                <td>{sport.id}</td>
                                <td>{sport.sport}</td>
                                <td>{sport.numberOfPlayers}</td>
                                <td>{sport.properties}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </section>
        </div>
    )
}