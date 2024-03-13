import { useState } from "react";
import reactLogo from "src/assets/react.svg";
import viteLogo from "/electron-vite.animate.svg";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="flex items-center gap-4">
        <a href="https://electron-vite.github.io" target="_blank">
          <img
            src={viteLogo}
            className="w-10 aspect-square object-cover"
            alt="Vite logo"
          />
        </a>
        <a href="https://react.dev" target="_blank">
          <img
            src={reactLogo}
            className="w-10 aspect-square object-contain animate-pulse"
            alt="React logo"
          />
        </a>
      </div>
      <h1 className="text-xl text-purple-700 font-semibold">Vite + React</h1>
      <div className="">
        <button onClick={() => setCount((count) => count + 1)}>
          count is <span className="font-mono">{count}</span>
        </button>
        <p>
          Edit
          <code className="bg-black bg-opacity-15 px-1 mx-1 rounded">
            src/App.tsx
          </code>
          and save to test HMR
        </p>
      </div>
      <p className="font-mono">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
