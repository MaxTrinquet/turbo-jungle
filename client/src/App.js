import './App.scss';
import { ShowPlantList } from './components/showPlantList';
import { BrowserRouter, Route, Routes} from "react-router-dom";
import { CreatePlant } from "./components/createPlant";

function App() {
  return (
    <div className="app-contents">
      <BrowserRouter>
      <Routes>
          <Route path="/" element={<ShowPlantList />}></Route>
          <Route path="/create-plant" element={<CreatePlant />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
