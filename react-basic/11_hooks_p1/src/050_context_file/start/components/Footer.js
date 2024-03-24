import { useTheme } from "../context/ThemeContext";

const Footer = () => {
  const [, setTheme] = useTheme();
  return (
    <footer>
      <div>フッター</div>
    </footer>
  );
};

export default Footer;
