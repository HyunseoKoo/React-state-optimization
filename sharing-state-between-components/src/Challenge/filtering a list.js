// https://react.dev/learn/sharing-state-between-components
// 상위 컴포넌트에서 필터링 기능을 추가하여 하위 컴포넌트에 전달

import { useState } from "react";
import { filterItems, foods } from "./filtering a list data";

export default function FilterableList() {
    const [query, setQuery] = useState('');
    const result = filterItems(foods, query);

    const handleChange = (e) => {
        setQuery(e.target.value);
    }

    return (
        <>
            <SearchBar query={query} handleChange={handleChange}/>
            <hr />
            <List items={result}/>
        </>
    );
}

function SearchBar({query, handleChange}) {

    return (
        <label>
            search:{''}
            <input
                value={query}
                onChange={handleChange}
            />
        </label>
    );
}

function List({items}) {
    return (
        <table>
            <tbody>
                {items.map(food => (
                    <tr key={food.id}>
                        <td>{food.name}</td>
                        <td>{food.description}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}