import { Route, Routes } from 'react-router-dom';
import './App.css';

import Layout from './components/Layout';
import Calculate from './routes/Calculate';
import Home from './routes/Home';
import NotMatch from './routes/NotMatch';
import Quote from './routes/Quote';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="calculator" element={<Calculate />} />
        <Route path="quote" element={<Quote />} />
        <Route path="*" element={<NotMatch />} />
      </Route>
    </Routes>
  );
}

export default App;
