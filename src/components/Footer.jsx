function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <p className="footer-text">
          &copy; {new Date().getFullYear()} Naveen R &middot; Built with React
        </p>
      </div>

      <style>{`
        .footer {
          padding: 2rem 0;
          border-top: 1px solid var(--border);
          text-align: center;
        }

        .footer-text {
          font-size: var(--font-size-sm);
          color: var(--muted);
          letter-spacing: 0.02em;
        }
      `}</style>
    </footer>
  );
}

export default Footer;
