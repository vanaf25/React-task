import React from 'react';
import './App.css';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import Main from "./pages/Main/Main";
function App() {
    const router = createBrowserRouter([
        {
            path: "/:id?",
            element: <Main />,
        },
    ]);
  return (
    <div className="container">
        <RouterProvider router={router} />
    </div>
  );
}

export default App;
