import { createRoot } from 'react-dom/client'
import './index.css'
import { Provider } from 'react-redux'
import { Routing, store } from '@/app'

createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <Routing />
  </Provider>
)
