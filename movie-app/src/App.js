import Home from './routes/Home';
import {BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Detail from './routes/Detail';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/movie/:id' element={<Detail/>}></Route>
      <Route path='/' element={<Home/>}></Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App;
