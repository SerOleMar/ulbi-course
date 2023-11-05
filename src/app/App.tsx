import { useTheme } from "@/app/providers/ThemeProvider";
import { AppRouter } from "@/app/providers/Router";
import { Navbar } from "@/widgets/Navbar";
import { Sidebar } from "@/widgets/Sidebar";
import { classNames } from "@/shared/lib/classNames";
import "./styles/index.scss";

const App = () => {
  const { theme } = useTheme();

  return (
    <div className={classNames("app", {}, [theme])}>
      <Navbar />
      <div className="content">
        <Sidebar className="sidebar" />
        <div className="main">
          <AppRouter />
        </div>
      </div>
    </div>
  );
};

export default App;
