import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { AuthRoute } from '../auth-route'
import { paths } from '@/shared'
import { LoginPage, TodolistPage } from '@/page'

export const Routing = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AuthRoute />}>
          <Route path={paths.main.route()} element={<>Главная страница</>} />
          <Route path={paths.todolist.route()} element={<TodolistPage />} />
        </Route>
        <Route path={paths.login.route()} element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  )
}
