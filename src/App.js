import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import ProfileConatiner from "./components/Profile/ProfileContainer";
import UsersContainer from "./components/Users/UsersContainer";

function App() {
  return (
    <BrowserRouter>
      <div className="all-wrapper">
        <HeaderContainer />
        <Navbar />
        <div className="content">
          <Route path="/Dialogs" render={() => <DialogsContainer />} />
          <Route path="/Profile/:userId?" render={() => <ProfileConatiner />} />
          <Route path="/Users" render={() => <UsersContainer />} />
          <Route path="/Login" render={() => <Login />} />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
