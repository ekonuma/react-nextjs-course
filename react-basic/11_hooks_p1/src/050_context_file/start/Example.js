import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import "./Example.css";
import { ThemeProvider } from "./context/ThemeContext";

const Example = () => {
  return (
    <ThemeProvider>
      <Header />
      <Main />
      <Footer />
    </ThemeProvider>
  );
};

export default Example;
