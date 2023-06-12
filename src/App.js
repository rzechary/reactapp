import logo from './logo.svg';
import './App.css';
import AppHw from './comps/appHw';
import AppDate from './comps_date/appData';
import ShopList from './comps_loop/shopList';
import ParentComp from './comps/parentComp';

function App() {
  return (
    <div className="App">
      <AppHw />
      <hr/>
      <AppDate/>
      <hr/>
      <ShopList/>
      <hr/>
      <ParentComp/>
      <hr/>
    </div>
  );
}

export default App;
