import React from 'react';
import './App.css';

const SlowUI = ({ value } : { value: number }) => (
  <>
    {Array(value)
      .fill(1)
      .map((_, index) => (
        <span key={index}>{value - index} </span>
      ))}
  </>
);

function App() {
  const [value, setValue] = React.useState(0);
  const [value2, setValue2] = React.useState(100);
  const [isPending, startTransition] = React.useTransition();

  const handleClick = () => {
    setValue(value + 1);
    // low priority rending
    startTransition(() => setValue2(value2 * 2));
  };

  return (
    <>
      <button onClick={handleClick}>{value}</button>
      <div
        style={{
          opacity: isPending ? 0.5 : 1,
        }}
      >
        <SlowUI value={value2} />
      </div>
    </>
  );
}

export default App;
