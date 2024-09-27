import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import routers from "./router";
import HomeIndex from './pages/home';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeIndex />} />
        {
          routers.map((route: any, key) => {
            return (
              <Route
                key={key}
                path={route.path}
                element={<route.component routes={route.routes} />}
              />
            );
          })
        }
      </Routes>
    </Router>
  );
}
