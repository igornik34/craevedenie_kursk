import Chat from "../pages/Chat";
import Culture from "../pages/Culture";
import History from "../pages/History";
import Home from "../pages/Home";
import Nature from "../pages/Nature";
import Test from "../pages/Test";

export const routes = [
    {path: '/', name: 'Главная', element: <Home/>, exact: true},
    {path: '/history', name: 'История', element: <History/>, exact: true},
    {path: '/culture', name: 'Культура', element: <Culture/>, exact: true},
    {path: '/nature', name: 'Природа', element: <Nature/>, exact: true},
    {path: '/test', name: 'Тест', element: <Test/>, exact: true},
    {path: '/chat', name: 'Чатик', element: <Chat/>, exact: true},
]