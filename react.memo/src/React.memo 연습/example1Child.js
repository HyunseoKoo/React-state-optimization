import React, { memo } from 'react';

function Child({name, age}) {
    console.log('자녀 컴포넌트도 렌더링')
    return (
        <div style={{border: '2px solid red', padding: '10px'}}>
            <h3>자녀</h3>
            <p>이름: {name}</p>
            <p>나이: {age}</p>
        </div>
    );
};

// memo() 고차 컴포넌트 필요!
// 부모 컴포넌트에서 전달하는 props가 변경되지 않으면 해당 컴포넌트는 랜더링 x.
export default memo(Child);