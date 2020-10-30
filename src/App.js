import './App.css';
import Header from './components/header/Header';
import TinderCards from './components/tinder-cards/TinderCards';
import SwipeButtons from './components/swipeButtons/SwipeButtons';

function App() {
  return (
    <div className="app">
      <Header />
      <TinderCards />
      <SwipeButtons />
    </div>
  );
}

export default App;
