import React, { useEffect, useState, useCallback} from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { useTelegram } from './hooks/useTelegram';
import Home from './components/Home/Home';
import Menubutton from './components/Menubutton/Menubutton';
import Menu from './components/Menu/Menu';

function App() {
  const { tg } = useTelegram();
  const [menuopen, setMenuopen] = useState(false);

  const toggleMenu = useCallback(() => {
    setMenuopen(!menuopen);
  },[menuopen,setMenuopen])


      useEffect(() => {
        tg.ready();
        tg.enableClosingConfirmation();
        tg.setHeaderColor('#ff0000')
          if (!tg.isExpanded) {
             tg.expand();
          }
      }, [tg])

  if (!tg.isExpanded) {
             tg.expand();
          }
  return (
    <div className="App">
      <main className='app-body'>
      <Routes>
        <Route index element={<Home/>}></Route>
        </Routes>
      </main>
      <Menubutton onClick={toggleMenu} menuopen={menuopen} />
      <Menu menuopen ={menuopen}/>
    </div>
  );
}

export default App;
