import "./App.css";
import AppContainer from "./components/AppContainer";
import { ThemeProvider } from "./context/themeSwitch";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <ThemeProvider>
      <AppContainer />
    </ThemeProvider>
  );
}

export default App;