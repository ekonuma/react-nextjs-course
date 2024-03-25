import { useTheme, useUpdateTheme } from "../context/ThemeContext";

const Header = () => {
  const changeTheme = (e) => setTheme(e.target.value);

  const THEMES = ["light", "dark", "red"];
  const theme = useTheme();
  const setTheme = useUpdateTheme();
  return (
    <>
      <header className={`content-${theme}`}>
        {THEMES.map((_theme) => {
          return (
            <label key={_theme}>
              <input
                type="radio"
                key={_theme}
                value={_theme}
                checked={theme === _theme}
                onChange={changeTheme}
              />
              {_theme}
            </label>
          );
        })}
      </header>
      ;
    </>
  );
};

export default Header;
