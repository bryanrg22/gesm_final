import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import Home from './pages/Home';
import Themes from './pages/Themes';
import Timeline from './pages/Timeline';
import Characters from './pages/Characters';
import Quiz from './pages/Quiz';
import GeneratedPoems from './pages/GeneratedPoems';
import Chatbot from './pages/Chatbot';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/gesm_final" element={<Home />} />
          <Route path="/themes" element={<Themes />} />
          <Route path="/timeline" element={<Timeline />} />
          <Route path="/characters" element={<Characters />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/poems" element={<GeneratedPoems />} />
          <Route path="/chatbot" element={<Chatbot />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;

