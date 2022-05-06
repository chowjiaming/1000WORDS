import './Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <p className="footer__text">
        Made with <span className="footer__text footer__text--emoji">♥</span> by{' '}
        <a
          className="footer__text footer__text--link"
          href="https://github.com/chowjiaming"
        >
          Joseph Chow
        </a>
      </p>
    </footer>
  );
};

export default Footer;
