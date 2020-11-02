import './App.css';
import CakeContainer from './components/cakeContainer';
import {Provider} from 'react-redux'
import store from './redux/store';
import IceCreamContainer from './components/IceCreamContainer';
import HooksCakeContainer from './components/hooksCakeContainer';
import NewCakeContainer from './components/NewCakeContainer'
import UserContainer from './components/UserContainer';

function App() {
  return (

    <Provider store={ }>  
      <div className="App">
        {/* <CakeContainer/> */}
        {/* <HooksCakeContainer/> */}
        {/* <NewCakeContainer/> */}
        {/* <IceCreamContainer/> */}
        <UserContainer/>
      </div>
    </Provider>
  );
}

export default App;
