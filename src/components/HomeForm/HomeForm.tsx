import { useEffect, useState } from "react";
import { CurrentMovie, GameStat } from "../../types/games.types";
import { Search } from "../SearchBlock/Search"
import axios from "axios";


// let test: GameStat[] = [];


// fetch(url)
//     .then(response => response.json())
//     .then(data => { console.log("test",data.results); test = data.results;})
//     .catch(error => console.log(error))


export function HomeForm() {

    useEffect(() => {
        getData();
        console.log(1)
    }, []);

    getData();

    let test: GameStat[] = [];

    async function getData() {
        try{
            const response = axios.get("https://api.rawg.io/api/games?key=&page=1&page_size=24");
            test = (await response).data.results as GameStat[];
            console.log("res =>", (await response).data.results);
            console.log(test)
        } catch (error) {
            console.log(error);
        }
    }

    // axios.get("https://api.rawg.io/api/games", {
    //     params: {
    //         key: "",
    //         page: 1,
    //         page_size: 24,
    //     }
    // }).then(response => console.log(response)).catch(error => console.log(error))

    //const response = await res.json();

    // const url = "https://api.rawg.io/api/games?key=&page=1&page_size=24"


//    console.log(test)
//    await for (let game in test) {
//     console.log(game);
//    } 
   
    // fetch(url)
    // .then(response => {response.json(); console.log(response)})
    // .then(data => data/*{ console.log("test",data.results)}*/)
    // .catch(error => console.log(error))

    // const [filterMovie, setFilteredMovie] = useState(test)

    // //setFilteredMovie(test);
    // function updateFilter (data: GameStat[]) {
    //     setFilteredMovie(data);
    // }

    //console.log("filter", filterMovie)

    
    
    return(
        <>
        <section className="base">
            <section className="upper-wrapper">
                
            </section>
            <section className="lower-wrapper">
                <ul className="movie-list">
                    {test.map((game) => (
                        <li key={game.name}>
                            <span>{game.name}</span>
                        </li>
                    ))}
                </ul>
            </section>
        </section>
        </>
    )
}