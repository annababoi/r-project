import {Route, Routes} from 'react-router-dom';

import {MainLayout} from "./layouts";
import {CommentsPage, PostsPage, SingleUserPage, UserPage} from "./pages";


function App() {

    return (
        <div>
            <Routes>
                <Route path={'/'} element={<MainLayout/>}>
                    <Route path={'users'} element={<UserPage/>}/>
                        <Route path={'users/:id'} element={<SingleUserPage/>}/>
                    <Route path={'posts'} element={<PostsPage/>}/>
                    <Route path={'comments'} element={<CommentsPage/>}/>
                </Route>
            </Routes>
        </div>
    );
}

export default App;
