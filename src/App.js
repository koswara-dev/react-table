import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Container from 'react-bootstrap/Container';
import { ExampleComponent } from './components/table/ExampleComponent';
import { Home } from './components/home/Home';
import { PageNotFound } from './components/PageNotFound';
import { ExampleModals } from './components/modals/ExampleModals';
import { ExampleNavbar } from './components/navbar/ExampleNavbar';
import { SampleNestedRow } from './components/table/SampleNestedRow';

function App() {
  return (
    <Container>
      <ExampleNavbar />
      <Container className="p-3 mb-4 bg-light rounded-3"> 
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/table' element={<ExampleComponent />} />
            <Route path='/table-nested-row' element={<SampleNestedRow />} />
            <Route path='/modals' element={<ExampleModals />} />
            <Route path='*' element={<PageNotFound />} />
          </Routes>
        </BrowserRouter>
      </Container>
    </Container>
  );
}

export default App;
