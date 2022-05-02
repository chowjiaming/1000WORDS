import './Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <p className="footer__text">
        Translations by{' '}
        <a
          className="footer__text footer__text--link"
          href="https://1000mostcommonwords.com/"
          target="_blank"
          rel="noreferrer"
        >
          1000mostcommonwords
        </a>
        . Crafted with ♥ by{' '}
        <a
          className="footer__text footer__text--link"
          href="https://github.com/chowjiaming"
        >
          Joseph Chow
        </a>
        .
      </p>
    </footer>
  );
};

export default Footer;
