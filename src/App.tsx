import { AnimatePresence } from 'motion/react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Layout from './layouts/Layout';
import Home from "@/pages/Home";
import NotFound from "@/pages/NotFound.tsx";


export default function App() {
  const location = useLocation();

  return (
     <Layout>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </AnimatePresence>
     </Layout>
  );
}



