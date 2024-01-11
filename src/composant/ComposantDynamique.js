import React, { useState } from 'react';

const ComponentA = ({ message }) => <div>Composant A - {message}</div>;
const ComponentB = ({ count }) => <div>Composant B - Count: {count}</div>;
const ComponentC = () => <div>Composant C</div>;

const App = () => {
  const [currentComponent, setCurrentComponent] = useState(null);
  const [message, setMessage] = useState('Hello');
  const [count, setCount] = useState(0);

  const components = {
    componentA: ComponentA,
    componentB: ComponentB,
    componentC: ComponentC,
  };

  const handleClick = (componentKey) => {
    setCurrentComponent(componentKey);
  };

  const renderComponent = () => {
    if (currentComponent) {
      const ComponentToRender = components[currentComponent];
      switch (currentComponent) {
        case 'componentA':
          return <ComponentToRender message={message} />;
        case 'componentB':
          return <ComponentToRender count={count} />;
        default:
          return <ComponentToRender />;
      }
    }
    return null;
  };

  return (
    <div>
      <ul>
        <li>
          <a href="#" onClick={() => handleClick('componentA')}>
            Afficher Composant A
          </a>
        </li>
        <li>
          <a href="#" onClick={() => handleClick('componentB')}>
            Afficher Composant B
          </a>
        </li>
        <li>
          <a href="#" onClick={() => handleClick('componentC')}>
            Afficher Composant C
          </a>
        </li>
      </ul>

      {renderComponent()}
    </div>
  );
};

export default App;
