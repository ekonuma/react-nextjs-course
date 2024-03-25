import { useUpdateTheme } from "../context/ThemeContext";

const Footer = () => {
  const setTheme = useUpdateTheme();
  return (
    <footer>
      <div>フッター</div>
    </footer>
  );
};

export default Footer;
