
import React from 'react';
import Accordion from './components/accordion';
import { accordionData } from './components/data';
import accordionstyle from './accordionstyle.css';

const App = () => {
  return (
    <div>
      <h1>Frequently Asked Questions</h1>
      <div className="accordion">
        {accordionData.map(({ title, content }) => (
          <Accordion title={title} content={content} />
        ))}
      </div>
    </div>
  );
};

export default App;