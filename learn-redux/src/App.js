import ContextWithReducer from './components/ContextWithReducer';
import ContextWithState from './components/ContextWithState';
import ExampleUseState from './components/ExampleUseState';

function App() {
  return (
    <div className="App">
      <ExampleUseState />
      <ContextWithState />
      <ContextWithReducer />
    </div>
  );
}

export default App;
