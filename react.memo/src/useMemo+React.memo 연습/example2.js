import { useMemo, useState } from "react";
import Child2 from "./example2Child";

function Component2() {
    const [parentAge, setParentAge] = useState(0);

    const incrementParentAge = () => {
        setParentAge(parentAge + 1); 
    };

    console.log('부모 컴포넌트 렌더링')

    // Child 자식 컴포넌트에 props로 전달하면, Component2 함수를 호출할때마다 name 이라는 객체 메모리 주소값이 재할당되어 자식 컴포넌트를 react.memo로
    const name = 
    // {
        //     lastName: '고',
        //     firstName: '라니',
    // }
    // 최적화 해주더라도 계속해서 렌더링됨. 메모이제이션이 필요한 상태!
    useMemo(() => {
        return {
            lastName: '고',
            firstName: '라니',
        }
    }, [])
        
    return(
        <div style={{border: '2px solid navy', padding: '10px'}}>
            <h1>부모</h1>
            <p>나이: {parentAge}</p>
            <button onClick={incrementParentAge}>부모님 연세 증가</button>
            <Child2 name={name}/> 
        </div>
    )
}

export default Component2;