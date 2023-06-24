import { useState } from 'react';
import { css } from '@emotion/react';
import reactLogo from './assets/react.svg';
import './App.scss';
import Clock from '@/components/atoms/Clock';

const textBoldStyle = css({
  fontWeight: 'bold',
});

const greenStyle = css`
  color: green;
`;

const App: React.FC = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="App" css={textBoldStyle} data-testid="App">
      <div>
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button
          onClick={() => {
            setCount((count) => count + 1);
          }}
        >
          <p css={greenStyle}>count is {count}</p>
        </button>
        <p css={{ color: 'blue' }}>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">Click on the Vite and React logos to learn more</p>
      <div>
        <Clock css={{ color: 'blue', fontWeight: 'bold' }} />
      </div>
    </div>
  );
};

export default App;
