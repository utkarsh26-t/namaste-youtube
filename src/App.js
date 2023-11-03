import './App.css';
import Head from './components/Head';
import Body from './components/Body';
import { Provider } from 'react-redux';
import store from "./utils/store"
import { createBrowserRouter,  Outlet } from 'react-router-dom';
import MainContainer from './components/MainContainer';
import WatchPage from './components/WatchPage';
import SearchResultsList from "./components/SearchResultsList"
// const appRouter = createBrowserRouter([
//   {
//     path: "/",
//     element: <Body/>,
//     children: [
//       {
//         path: "/",
//         element: <MainContainer/>
//       },
//       {
//         path: "/watch",
//         element: <WatchPage/>
//       },
//       {
//         path: "/results",
//         element: <SearchResultsList/>
//       }
//     ]
//   }
// ])
export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Body />,
        children: [
          {
            path: "",
            element: <MainContainer/>
          },
          {
            path: "watch",
            element: <WatchPage/>
          },
          {
            path: "results",
            element: <SearchResultsList/>
          }
        ]
      }
    ],
  },
]);

function App() {
  return (
    <Provider store={store}>
      <div className="text-neutral-50 flex flex-col h-screen scroll-smooth">
        <Head />
        <Outlet />
      </div>
    </Provider>
  );
}

export default App;
