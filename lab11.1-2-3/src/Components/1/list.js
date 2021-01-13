import Number from "./number";

let max = 333;
let random = 0;

function List(props) {

    let numbers = [];
    for (let i = 1; i <= props.number; i++) {
        numbers.push(i)
    }

    const listItems = numbers.map((n) => {
            random = Math.floor(Math.floor(max) * Math.random());
            return <Number n={random} />
        }
    );

    return (
        <ol> { listItems } </ol>
    );
}

export default List;