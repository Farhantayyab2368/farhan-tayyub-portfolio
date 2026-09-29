import { AnimatePresence, motion } from 'framer-motion';
import { CircleCheck, Info } from 'lucide-react';

export default function Toast({ toast }) {
  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-6 z-[90] flex justify-center px-4" role="status" aria-live="polite">
      <AnimatePresence>
        {toast && (
          <motion.div
            key={toast.id}
            initial={{ opacity: 0, y: 20, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12 }}
            className="glass-strong pointer-events-auto flex max-w-md items-start gap-3 rounded-2xl px-5 py-4 text-sm shadow-2xl"
          >
            {toast.type === 'success' ? (
              <CircleCheck className="mt-0.5 shrink-0 text-lime" size={18} aria-hidden />
            ) : (
              <Info className="mt-0.5 shrink-0 text-sev-medium" size={18} aria-hidden />
            )}
            <span className="text-white/90">{toast.message}</span>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
