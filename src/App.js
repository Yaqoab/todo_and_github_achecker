import DisplayTodo from './components/display';
import GithubDisplay from './components/githubdisplay';
import CheckGithub from './components/checkgit';
import AddTodo from './components/addTodo';
import {Switch, Route } from 'react-router-dom';
import {configureStore} from '@reduxjs/toolkit';
import {Provider} from 'react-redux';
import { ChakraProvider } from '@chakra-ui/react';
import addSlice from './components/slices/addSlice';
import Home from './components/home';
import githubSlice from './components/slices/githubSlice';
// import userSlice from './practice/userslice';

const store=configureStore({
  reducer:{
    addTodo:addSlice,
    github:githubSlice
  },
})
console.log(store.getState())
function App() {
  return (
      <div className="App" style={{marginTop:'50px'}}>
          <ChakraProvider>
            <Provider store={store}>
            <Switch>
         <Route exact path="/"><Home /></Route>
         <Route  path="/todo"><AddTodo /></Route>
         <Route  path='/display'><DisplayTodo /></Route>
         <Route  path='/github'><CheckGithub /></Route>
         <Route  path='/displayuser'><GithubDisplay /></Route>
          </Switch>
          </Provider>
          </ChakraProvider>
         </div>
  );
}
export default App;
