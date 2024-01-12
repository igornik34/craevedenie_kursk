import Chat from "../pages/Chat/Chat";
import Culture from "../pages/Culture/Culture";
import History from "../pages/History/History";
import Home from "../pages/Home";
import Nature from "../pages/Nature";
import TestPage from "../pages/TestPage";

export const routes = [
  { path: "/", name: "Главная", element: <Home />, exact: true },
  { path: "/history", name: "История", element: <History />, exact: true },
  { path: "/culture", name: "Культура", element: <Culture />, exact: true },
  { path: "/nature", name: "Природа", element: <Nature />, exact: true },
  { path: "/test", name: "Тест", element: <TestPage />, exact: true },
  { path: "/chat", name: "Чатик", element: <Chat />, exact: true },
];
