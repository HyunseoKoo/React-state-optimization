import React, { useMemo, useState } from 'react';

const hardCalculate = (num) => {
  console.log('렌더링 확인');
  for (let i = 0; i < 100; i++) {
    console.log('복잡한 계산');
  } // 생각하는 시간
  return num + 10000;
}

const easyCalculate = (num) => {
  console.log('쉬운 계산');
  return num + 1;
}

function Component() {
  const [hardNum, setHardNum] = useState(1);
  const [easyNum, setEasyNum] = useState(1);

  // const hardSum = hardCalculate(hardNum); // 메모이제이션이 필요한 값 
  const hardSum = useMemo(() => {
    return hardCalculate(hardNum)
  }, [hardNum]);
  const easySum = easyCalculate(easyNum);

  return (
    <div className="App">
      <h3>어려운 계산기</h3>
      <input
        type='number'
        value={hardNum}
        onChange={(e) => setHardNum(parseInt(e.target.value))}
      />
      <span> + 10000 = {hardSum}</span>

      <h3>쉬운 계산기</h3>
      <input
        type='number'
        value={easyNum}
        onChange={(e) => setEasyNum(parseInt(e.target.value))}
      />
      <span> + 1 = {easySum}</span>
    </div>
  );
}

export default Component;
