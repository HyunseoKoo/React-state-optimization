import { useState } from "react";
import Child from "./example1Child";

function Component1() {
    const [parentAge, setParentAge] = useState(0);
    const [childAge, setChildAge] = useState(0);

    const incrementParentAge = () => {
        setParentAge(parentAge + 1); 
    };

    const incrementChildAge = () => {
        setChildAge(childAge + 1); 
    };

    console.log('부모 컴포넌트 렌더링')

    return(
        <div style={{border: '2px solid navy', padding: '10px'}}>
            <h1>부모</h1>
            <p>나이: {parentAge}</p>
            <button onClick={incrementParentAge}>부모님 연세 증가</button>
            <button onClick={incrementChildAge}>자녀 나이 증가</button>
            {/* Child 컴포넌트는 react.memo로 최적화 되어 있어서 랜더링 전에 props 체크를 먼저 함. 그래서 props에 변화가 없다면 기존값 재사용! */}
            <Child name={'쿠우'} age={childAge}/> 
        </div>
    )
}

export default Component1;