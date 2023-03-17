import "./App.css";
import AppContainer from "./components/AppContainer";
import { ThemeProvider } from "./context/themeSwitch";
import 'bootstrap/dist/css/bootstrap.min.css';

// peer review by [Shaun]
// The app looks good, seems like it's getting there, just didnt't quite finish. Works as intended. Revise it when you have the time, But overall good effort on the project.

function App() {
  return (
    <ThemeProvider>
      <AppContainer />
    </ThemeProvider>
  );
}

export default App;