// https://react.dev/learn/sharing-state-between-components
// 이 두 입력은 독립적입니다. 동기화 상태 유지: 하나의 입력을 편집하면 다른 입력이 동일한 텍스트로 업데이트되고 그 반대도 마찬가지입니다.

import { useState } from "react"

export default function SyncedInputs() {
    const [syncedText, setSyncedText] = useState('');

    // 
    const handleChange = e => {
        setSyncedText(e.target.value);
    }

    return (
        <>
            <Input 
                label = "First input"
                syncedText={syncedText}
                handleChange={handleChange}
            />
            <Input 
                label = "Second input"
                syncedText={syncedText}
                handleChange={handleChange}
            />
        </>
    );
}

function Input({label, syncedText, handleChange}) {
    // const [text, setText] = useState('');

    // function handleChange(e) {
    //     // setText(e.target.value);
    //     setSyncedText(e.target.value);
    // }

    return (
        <label>
            {label}
            {' '}
            <input
                value = {syncedText}
                onChange={handleChange}
            />
        </label>
    );
}