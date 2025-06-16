import { BrowserRouter, Route, Routes } from "react-router-dom"
import Registration from "./routes/HomeClient/Registration"
import HomeClient from "./routes/HomeClient"
import Promotion from "./routes/HomeClient/Promotion"
import HomeBody from "./routes/HomeClient/HomeBody"

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeClient/>}>
          <Route index element={<HomeBody/>} />
          <Route path="promotion" element={<Promotion/>} />
          <Route path="registration" element={<Registration/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
