import './App.css';
import{
  BrowserRouter,
    Route,
    Routes,
    Link,
    Outlet
} from "react-router-dom";

import Todos from "./components/Todos/Todos";
import Albums from "./components/Albums/Albums";
import Comments from "./components/Comments/Comments";
import Posts from "./components/Posts/Posts";

function App() {
  return (
    <div>
<ul>
  <li><Link to={'todos'}>Todos</Link></li>
  <li><Link to={'albums'}>Albums</Link></li>
  <li><Link to={'comments'}>Comments</Link></li>
</ul>
      <hr/>
      <Routes>
        <Route path={'todos'} element={<Todos/>}/>
          <Route path={'albums'} element={<Albums/>}/>
          <Route path={'comments'} element={<Comments/>}>
              <Route path={'posts:id'} element={<Posts/>}/>
          </Route>

          <Route/>
      </Routes>
    </div>
  );
}

export default App;
