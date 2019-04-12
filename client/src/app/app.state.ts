import { List } from './todo/models/List';
import { User } from './user-managment/models/user';

export interface AppState {
    readonly list: List;
    readonly user: User;
    readonly counter: number;
}
