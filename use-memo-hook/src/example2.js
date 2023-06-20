import { useEffect, useMemo, useState } from "react";

function Component2() {
    const [num, setNum] = useState(0);
    const [isKorea, setIsKorea] = useState(true);

    // const location = isKorea ? '한국' : '외국'; 하루에 몇끼 먹어요? 값 변경해도 랜더링 x. (useEffect 때문)
    // 객체는 참조(메모리상의 주소)에 값이 저장됨. '한국' : '외국'; 하루에 몇끼 먹어요? 값 변경해도 랜더링 o. (Component2 함수 호출할 때 다시 할당되기 때문. useEffect의 의존배열과 다른 오브젝트!(다른 참조값)))
    // 즉, location이 다시 초기화 되는 것!
    const location = 
        // {country: isKorea ? '한국' : '외국'}; // isKorea state가 바뀌었을때만 재호출되게 하고 싶을 때 메모이제이션 필요!
    useMemo(() => {
        return {
            country: isKorea ? '한국' : '외국'
        }
    }, [isKorea]);
    


    useEffect(()=>{
        console.log('useEffect 호출');
    }, [location])

    return (
        <div>
            <h2>하루에 몇끼 먹어요?</h2>
            <input
                type="number"
                value={num}
                onChange={(e) => setNum(e.target.value)}
            />
            <h2>어느 나라에 있어요?</h2>
            <p>나라: {location.country}</p>
            <button onClick={() => setIsKorea(!isKorea)}>비행기 타자</button>
        </div>
    )
}

export default Component2;