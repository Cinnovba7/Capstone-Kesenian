import Kesenian from '../views/pages/kesenian';
import Home from '../views/pages/home';
import Detail from '../views/pages/detail';
import Order from '../views/pages/order';

const routes = {
  '/': Home,
  '/kesenian': Kesenian,
  '/detail/:name': Detail,
  '/order': Order,

};

export default routes;
