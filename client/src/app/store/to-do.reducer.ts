import {
  ActionTypes,
  All as AllTodoListActions
} from './to-do.actions';
import { AppState } from '../app.state';
import { createFeatureSelector, createSelector } from '@ngrx/store';


export const initialState: AppState = {
  user: null,
  list: null,
  counter: 0
};

export function todoReducer(state: AppState = initialState, action: AllTodoListActions) {
  switch (action.type) {
    case ActionTypes.SET_CURRENT_LIST:
      console.log('todoReducer SET_CURRENT_LIST ');
      return { ...state, list: action.payload };

    case ActionTypes.USER_LOGIN_SUCCESS:
      console.log('todoReducer USER_LOGIN_SUCCESS:');
      return { ...state, user: action.payload };

    case ActionTypes.LOAD_TASKS:
      console.log('todoReducer LOAD_TASKS:' + JSON.stringify(action));
      return createLoadTasksState(state, action);

    default:
      return state;
  }
}

function createLoadTasksState(state: AppState, action: AllTodoListActions) {

  const list = state.list;
  const user = state.user;

  const userList = user.Lists.filter(l => l.id === list.id)[0];
  const newList = { ...list, tasks: action.payload.tasks, counter: action.payload.tasks.length };
  const li = user.Lists.indexOf(userList);
  const newUser = { ...user };
  newUser.Lists[li] = newList;
  const counters = newUser.Lists.map(l => l.counter);
  const sum = counters.reduce((sum, el) => sum += el);
  const newState = { ...state, list: newList, newUser, counter: sum }

  return newState;
}

export const getTodoList = (state) => state.user;
export const getUserData = (state) => state.user;

const getCustomerFeatureState = createFeatureSelector<AppState>('user');

export const getUserId = createSelector(
  getCustomerFeatureState,
  (state: AppState) => (state.user) ? state.user.id : null
);

export function currentListCounterSelector(state: AppState): number {
  return state.list.tasks.length;
}
