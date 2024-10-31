import AppProvider from "./Context";
import Routes from "./routes";

const App: React.FC = () => {
  return  <AppProvider>
            <Routes/>
          </AppProvider>;
}

export default App;