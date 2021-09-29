export function createTodoAction(payload: string) {
  return {
    type: '@ADD_TODO',
    payload
  }
}