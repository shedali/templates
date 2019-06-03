import { RouterState, RouterStore } from 'mobx-state-router';
import { routes } from './routes';
import Person from "./person"


const notFound = new RouterState('notFound');

export class RootStore {
    routerStore = new RouterStore(this, routes, notFound);
}

