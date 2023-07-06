import React, { useState } from 'react';
import LoadingBar from 'react-top-loading-bar';

const App = () => {
  const [progress, setProgress] = useState(0);

  return (
    <div>
      <h3>How to Add a Top Loading Bar in React - <a href="https://cluemediator.com" target='_blank'>Clue Mediator</a></h3>
      <LoadingBar
        color='#f11946'
        height={3}
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />
      <button onClick={() => setProgress(val => val + 10)}>Add 10%</button>
      <button onClick={() => setProgress(val => val + 20)}>Add 20%</button>
      <button onClick={() => setProgress(100)}>Complete</button>
    </div>
  );
};

export default App;
