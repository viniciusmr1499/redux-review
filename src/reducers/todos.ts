export interface ITodoAction {
  type: string;
  payload: Object | string;
}

const INITIAL_STATE: Array<Object> = [];

function todos(state = INITIAL_STATE, action: ITodoAction) {
  switch (action.type) {
    case '@ADD_TODO':
      return [...state, {
        item: action.payload
      }];
    default: {
      return state;
    }
  }
}

export default todos;