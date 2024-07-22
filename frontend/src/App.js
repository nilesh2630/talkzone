
import './App.css';
import {Route} from "react-router-dom"
import HomePage from './components/Pages/HomePage';
import ChatPage from './components/Pages/ChatPage';
function App() {
  return (
    <div className="App">
    
   <Route path="/" component={HomePage} exact />
   <Route path="/chats" component={ChatPage} />

    </div>
  );
}

export default App;
