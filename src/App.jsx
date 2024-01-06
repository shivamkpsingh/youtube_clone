// import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './App.css'
import Body from './components/Body'
import Header from './components/Header'
import WatchPage from './components/WatchPage'
import MainContainer from './components/MainContainer'
import SearchContainer from './components/SearchContainer'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


// const appRouter = createBrowserRouter([{
//   path:'/',
//   element: <Body/>,
//   children:[
//     {
//       path: '/',
//       element: <MainContainer/>
//     },
//     {
//       path: 'watch',
//       element: <WatchPage/>
//     },
//     {
//       path: 'result',
//       element: <SearchContainer/>
//     },
//   ]
// }])
function App() {


  return (
    <>
     <Header/>
     <Routes>
      <Route path="/" element={<Body />}>
        <Route index element={<MainContainer />} />
        <Route path="/watch" element={<WatchPage />} />
        <Route path="/result" element={<SearchContainer />} />
      </Route>
    </Routes>
    </>
  )
}

export default App
