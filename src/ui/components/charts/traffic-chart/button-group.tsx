import React, { useState } from 'react';
import { PeriodButtonGroupDiv } from './styled';

const PeriodButtonGroup = () => {
  const durationLabels: string[] = [
    '15 Mins',
    '1 Hour',
    '1 Day',
    '1 Month',
    '1 Year',
    'All Time',
  ];
  const [activeButton, setActiveButton] = useState<number>(3);

  const handleClick = (index: number) => {
    setActiveButton(index);
  };
  return (
    <PeriodButtonGroupDiv>
      {durationLabels.map((item, index) => (
        <button
          key={index}
          onClick={() => handleClick(index)}
          className={activeButton === index ? 'active-button' : ''}
        >
          <strong>{item}</strong>
        </button>
      ))}
    </PeriodButtonGroupDiv>
  );
};
export default PeriodButtonGroup;
