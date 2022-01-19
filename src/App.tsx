import React from 'react';
import './App.scss';
import { Clock } from './clock';

type State = {
  isClockVisible: boolean,
};

export class App extends React.Component<{}, State> {
  state: State = {
    isClockVisible: true,
  };

  clickHandle = (value: boolean) => {
    this.setState({ isClockVisible: value });
  };

  render() {
    return (
      <div className="App">
        <h1>React clock</h1>

        <button
          type="button"
          onClick={() => this.clickHandle(true)}
        >
          Show Clock
        </button>

        <button
          type="button"
          onClick={() => this.clickHandle(false)}
        >
          Hide Clock
        </button>

        <div>
          {this.state.isClockVisible
            ? (
              <>
                Current time:
                {' '}
                <Clock />
                {/* Print the time here instead of DevTools */}
              </>
            )
            : <></>}
        </div>
      </div>
    );
  }
}

export default App;
