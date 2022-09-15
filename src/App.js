import './App.css';
import {Users} from "./components";

import {useState} from "react";

function App() {
   const [user, setUser] = useState([null]);
    return (
        <div>
            {user&& <h2>{JSON.stringify(user)}</h2>}
            <Users getUser={setUser}/>
        </div>
    );
}

export default App;
