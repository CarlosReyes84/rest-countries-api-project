import { BiMoon } from "react-icons/bi";

export const Header = ({mode, changeMode}) => {

  const changeMode1 = () => {
    mode === 'light' ? changeMode('dark') : changeMode('light');
  }

  return (
    <header className="header">
      <div className="container header-container">
        <h1>Where in the world?</h1>

        <button onClick={changeMode1}>
          <BiMoon />
          DarkMode
        </button>
      </div>
    </header>
  );
};

