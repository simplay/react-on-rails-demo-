import api from './base';

export function getTodos() {
  return api.get('todos');
}
