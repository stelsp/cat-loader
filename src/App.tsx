import { useEffect, useRef, useState } from "react";
import "./App.css";

const LOADER_DURATION_MS = 5000;

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const handleShowLoader = () => {
    if (isLoading) return;

    setIsLoading(true);
    timeoutRef.current = setTimeout(() => {
      setIsLoading(false);
    }, LOADER_DURATION_MS);
  };

  return (
    <main className="app">
      <div className="panel">
        {isLoading ? (
          <img src="/cat_loader.gif" alt="Cat loader" className="cat-loader" />
        ) : (
          <button
            className="show-button"
            type="button"
            onClick={handleShowLoader}
          >
            click me
          </button>
        )}
      </div>
    </main>
  );
}

export default App;
