import { useTheme } from "@/app/providers/ThemeProvider";
import { AppRouter } from "@/app/providers/Router";
import { Navbar } from "@/widgets/Navbar";
import { classNames } from "@/shared/lib/classNames";
import "./styles/index.scss";

const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={classNames("app", {}, [theme])}>
      <Navbar />
      <AppRouter />
      <button onClick={toggleTheme}>Toggle theme</button>
    </div>
  );
};

export default App;
