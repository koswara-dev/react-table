import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import { ExampleComponent } from './components/table/ExampleComponent';
import { Home } from './components/home/Home';
import { PageNotFound } from './components/PageNotFound';
import { ExampleNestedRow } from './components/table/ExampleNestedRow';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/table' element={<ExampleComponent />} />
          <Route path='/table-nested-row' element={<ExampleNestedRow />} />
          <Route path='*' element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
