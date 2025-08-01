import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ShortenerForm from './components/ShortenerForm';
import StatisticsPage from './components/StatisticsPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ShortenerForm />} />
        <Route path="/stats" element={<StatisticsPage />} />
        <Route path="/:shortcode" element={<RedirectHandler />} />
      </Routes>
    </Router>
  );
}

export default App;

