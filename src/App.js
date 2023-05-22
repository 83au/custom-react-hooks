import React from 'react';
import useTypewriter from './hooks/useTypewriter/use-typewriter.js';

function App() {
  const languages = ['HTML.', 'CSS.', 'JavaScript.'];
  const message = useTypewriter({
    text: languages,
    direction: 'both',
    repeat: -1,
    speed: 100,
  });
  return <h1>Hi! I like to code in {message}</h1>;
}

export default App;
