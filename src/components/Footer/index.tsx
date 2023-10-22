

import './index.css';

export function Footer() {
  return (
    <footer className="footer">
      {new Date().toDateString()}
    </footer>
  );
}
