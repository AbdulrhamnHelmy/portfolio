import "./Footer.css";

function Footer() {
  return (
    <footer className="flex">
      <ul className="flex">
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#skills">Skills</a>
        </li>
        <li>
          <a href="#main">Projects</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div>
        <p>© 2023 Spencer Sharp. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
