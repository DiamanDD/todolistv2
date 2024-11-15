export const paths = {
  main: {
    route: () => '/',
  },
  todolist: {
    route: (id: string = '') => `/todolist/${id}`,
  },
  login: {
    route: () => '/login',
  },
}
