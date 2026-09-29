import { useCallback, useEffect, useRef, useState } from 'react';
import { AnimatePresence, MotionConfig } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import LoadingScreen from './components/LoadingScreen';
import CustomCursor from './components/CustomCursor';
import ProjectModal from './components/ProjectModal';
import Toast from './components/Toast';
import Home from './pages/Home';
import { ToastContext } from './hooks/useToast';
import { projects } from './data/portfolio.config';

const projectFromHash = () => {
  const m = window.location.hash.match(/^#project\/(.+)$/);
  return m && projects.some((p) => p.id === m[1]) ? m[1] : null;
};

export default function App() {
  const [loading, setLoading] = useState(true);
  const [openId, setOpenId] = useState(projectFromHash);
  const [toast, setToast] = useState(null);
  const toastTimer = useRef();

  const done = useCallback(() => setLoading(false), []);

  const showToast = useCallback((t) => {
    clearTimeout(toastTimer.current);
    setToast({ ...t, id: Date.now() });
    toastTimer.current = setTimeout(() => setToast(null), 5000);
  }, []);

  // shareable project links: #project/<id>
  const openProject = useCallback((id) => {
    setOpenId(id);
    history.replaceState(null, '', `#project/${id}`);
  }, []);
  const closeProject = useCallback(() => {
    setOpenId(null);
    history.replaceState(null, '', '#projects');
  }, []);

  useEffect(() => {
    const onHash = () => setOpenId(projectFromHash());
    window.addEventListener('hashchange', onHash);
    return () => window.removeEventListener('hashchange', onHash);
  }, []);

  return (
    <MotionConfig reducedMotion="user">
      <ToastContext.Provider value={showToast}>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[300] focus:rounded-lg focus:bg-lime focus:px-4 focus:py-2 focus:text-ink"
        >
          Skip to content
        </a>
        <AnimatePresence>{loading && <LoadingScreen key="loader" onDone={done} />}</AnimatePresence>
        <CustomCursor />
        <div className="noise">
          <Navbar />
          <main id="main">
            <Home ready={!loading} onOpenProject={openProject} />
          </main>
          <Footer />
        </div>
        <ProjectModal projectId={openId} onClose={closeProject} onNavigate={openProject} />
        <Toast toast={toast} />
      </ToastContext.Provider>
    </MotionConfig>
  );
}
