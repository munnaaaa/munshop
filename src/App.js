import './App.css';
import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const Home = lazy(() => import('./Home'));
const Mlbb = lazy(() => import('./Mlbb'));
const Valo = lazy(() => import('./Valo'));
const Csgo = lazy(() => import('./Csgo'));
const Logincsgo = lazy(() => import('./Logincsgo'));
const Loginml = lazy(() => import('./Loginml'));
const LoginValo = lazy(() => import('./LoginValo'));
const Api = lazy(() => import('./Api'));

const App = () => (
<Router>
  <Suspense fallback={<div>Loading..</div>}>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Home" element={<Home />} />
      <Route path="/Mlbb" element={<Mlbb />} />
      <Route path="/Valo" element={<Valo />} />
      <Route path="/Csgo" element={<Csgo />} />
      <Route path="/Logincsgo" element={<Logincsgo />} />
      <Route path="/Loginml" element={<Loginml />} />
      <Route path="/LoginValo" element={<LoginValo />} />
      <Route path="/Api" element={<Api />} />
      
      </Routes>
  </Suspense>
</Router>
);

export default App;
