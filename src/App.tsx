import { NativeBaseProvider } from "native-base";
import Routes from "./routes";


const App = () => {
  return  <NativeBaseProvider>
            <Routes/>
          </NativeBaseProvider>;
}

export default App;