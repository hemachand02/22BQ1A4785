
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ShortenerForm from './ShortenerForm';
import StatisticsPage from './StatisticsPage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ShortenerForm />} />
        <Route path="/stats" element={<StatisticsPage />} />
        <Route path=":shortcode" element={<RedirectHandler />} />
      </Routes>
    </Router>
  );
};

export default App;

