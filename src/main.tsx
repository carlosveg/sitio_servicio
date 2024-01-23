import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { HashRouter } from 'react-router-dom'
import App from './App.tsx'
import './index.css'

// const router = createHashRouter([
//   { path: '/', element: <Blog /> },
//   { path: '/c++', element: <CPP title='CPP' /> }
// ])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {/* <RouterProvider router={router} /> */}
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>
)
