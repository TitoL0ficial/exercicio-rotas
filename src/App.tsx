import { BrowserRouter, Route, Routes } from "react-router-dom"
import HomeClient from "./routes/HomeClient"
import Promotion from "./routes/HomeClient/Promotion"
import HomeBody from "./routes/HomeClient/HomeBody"
import Subscription from "./routes/HomeClient/Subscription"

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeClient/>}>
          <Route index element={<HomeBody/>} />
          <Route path="promotion" element={<Promotion/>} />
          <Route path="subscription" element={<Subscription/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
