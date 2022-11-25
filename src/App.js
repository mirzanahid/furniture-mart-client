import { Toaster } from 'react-hot-toast';
import { RouterProvider } from 'react-router-dom';
import './App.css';
import { router } from './routes/Route';

function App() {
  return (
    <div className='App'>
      <RouterProvider router={router}></RouterProvider>
      <Toaster
        toastOptions={{
          success: {
            style: {
              background: 'green',
              color: '#ffffff',
              fontFamily: 'Jost',
              fontSize: '16px'
            },
          },
          error: {
            style: {
              background: 'red',
              color: '#ffffff',
              fontFamily: 'Jost',
              fontSize: '16px'
            },
          },
        }}
      />
    </div>
  );
}

export default App;
