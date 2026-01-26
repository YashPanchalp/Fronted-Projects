import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Hero from './components/Hero.jsx'
import Team from './components/Team.jsx'
import Features from './components/Features.jsx'
import Blog from './components/Blog.jsx'
import { RouterProvider , createBrowserRouter } from 'react-router-dom'



const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: 'home',
        element: <Hero />,
      },
      {
        path: 'team',
        element: <Team />,
      },
      {
        path: 'features',
        element: <Features />,
      },
      {
        path: 'blog',
        element: <Blog />,
      },
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>
)
