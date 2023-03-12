import { Counter } from "./components/Counter";
import { FetchData } from "./components/FetchData";
import FileUploader from "./components/FileUploader";
import { Home } from "./components/Home";
import { AudioPlayer } from "./components/AudioPlayer";

const AppRoutes = [
  {
    index: true,
    element: <Home />
  },
  {
    path: '/counter',
    element: <Counter />
  },
  {
    path: '/fetch-data',
    element: <FetchData />
  },
  {
    path: '/add-data',
    element: <FileUploader />
  },
  {
    path: '/audio-player',
    element: <AudioPlayer />
  }
];

export default AppRoutes;