import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Button } from '../dist/jumpstart-ui.cjs.development.js';
import '../dist/tailwind.css';

const App = () => {
  const [isToggled, setIsToggled] = React.useState(false);
  return (
    <div>
      <Button
        label={"Button"}
        onClick={() => {
          console.log("click");
        }}
        secondary
      />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
