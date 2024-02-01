import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Summary from './components/Summary';
import Shows from './components/Shows';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/summary" element={<Summary />} />
                <Route path="/" element={<Shows />} />
            </Routes>
        </Router>
    );
};

export default App;