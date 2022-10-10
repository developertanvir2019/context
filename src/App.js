
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import About from './Components/About';
import Home from './Components/Home';
import Layout from './Components/Layout';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      loader: () => fetch('https://jsonplaceholder.typicode.com/users'),
      element: <Layout></Layout>,
      children: [
        {
          path: 'home',
          element: <Home></Home>
        },
        {
          path: 'about',
          element: <About></About>
        }
      ]
    }
  ])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
