import { socialImgs, navLinks } from "../constants";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <nav aria-label="Footer" className="flex flex-wrap justify-center gap-x-5 gap-y-2 md:justify-start">
          {navLinks.slice(0, 4).map(({ name, link }) => (
            <a key={name} href={link} className="text-sm hover:text-white transition-colors duration-300">
              {name}
            </a>
          ))}
        </nav>
        <div className="socials">
          {socialImgs.map(({ name, imgPath, href }) => {
            const icon = (
              <div className="icon">
                <img src={imgPath} alt={name} />
              </div>
            );
            return href ? (
              <a key={name} href={href} target="_blank" rel="noopener noreferrer" aria-label={name}>
                {icon}
              </a>
            ) : (
              <div key={name}>{icon}</div>
            );
          })}
        </div>
        <div className="flex flex-col justify-center">
          <p className="text-center md:text-end">
            © {new Date().getFullYear()} Reshma V. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
