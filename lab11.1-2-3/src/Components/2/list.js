import {useState} from "react";
import Number from "./number";

let max = 333;
let random = 0;

function List(props) {

    const [listItems, setListItems] = useState([]);

    let numbers = []
    for (let i = 1; i <= props.number; i++) {
        numbers.push(i)
    }

    function generate(newNumbers) {
        newNumbers.preventDefault();

        const listItems = numbers.map((number) => {
                random = Math.floor(Math.random() * Math.floor(max));
                return <Number n={random} />
            }
        );
        setListItems([...listItems]);

    }

    return (
        <>
            <ol> { listItems } </ol>
            <button onClick={generate}> {'New numbers'} </button>
        </>
    );
}

export default List;