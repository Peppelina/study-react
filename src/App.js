import './App.css';
import Header from './components/Header/Header';
import Profile from './components/Profile/Profile';
import Sidebar from './components/Sidebar/Sidebar';
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route, Routes} from "react-router-dom";

/* http://preview.themeforest.net/item/buddy-multipurpose-wordpressbuddypress-theme/full_screen_preview/3506362?_ga=2.214380447.908696352.1643398348-404296411.1634847135
*/
function App() {
    return (
        <BrowserRouter>
            <div className='App'>
                <Header />
                <Sidebar />
                <div className="App-content">
                    <Routes>
                        <Route path='/profile' element={<Profile />} />
                        <Route path='/dialogs' element={<Dialogs />} />
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
