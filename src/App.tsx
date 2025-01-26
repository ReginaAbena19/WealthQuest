import React from 'react';
import './quiz.css';  // Import the CSS file into your App.tsx
import './index.css';
import Title from './Title';  // Import Title component
import Slogan from './Slogan';  // Import Slogan component
import Questions from './Questions';  // Import the Questions component

const App: React.FC = () => {
  return (
    <div className="container">
      <Title />
      <Slogan />
      <Questions /> {/* Here we add the Questions component */}
    </div>
  );
}

export default App;
