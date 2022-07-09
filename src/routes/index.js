import { $ } from "../utils/getNode";
import Home from "../pages/Home";
import Character from "../pages/Character";
import Error404 from "../pages/Error404";
import Header from "../templates/Header";
import getHash from '../utils/getHash'
import resolveRoute from "../utils/resolveRoute";

const routes = {
    '/': Home,
    '/:id': Character,
    '/contact': 'Contact'
}

const router = async () => {
    const header = null || $('#header');
    const content = null || $('#content');

    header.innerHTML = await Header();

    let hash = getHash();
    let route = await resolveRoute(hash);

    let render = routes[route] ? routes[route] : Error404;

    content.innerHTML = await render();
};

export default router;