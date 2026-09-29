import { cv } from '../data/portfolio.config';

/**
 * Downloads the CV if the file exists. Returns true on success so the UI
 * can show a friendly message when the PDF has not been added yet.
 */
export async function downloadCV() {
  try {
    const res = await fetch(cv.path, { method: 'HEAD' });
    const type = res.headers.get('content-type') || '';
    if (!res.ok || type.includes('text/html')) return false;
    const a = document.createElement('a');
    a.href = cv.path;
    a.download = cv.fileName;
    document.body.appendChild(a);
    a.click();
    a.remove();
    return true;
  } catch {
    return false;
  }
}
