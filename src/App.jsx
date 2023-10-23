import { Outlet } from "react-router-dom"

import Header from "./components/Header"
// import Footer from "./components/Footer"

import Time from './assets/imgs/time.jpg'

function App() {
  return (
    <>
      <Header/>

      <main>
        <Outlet/>
      </main>

      <span className="parabens">
        <h1>Parabéns!</h1>

        <h2>Você montou o seu time do Cartola <strong>G12</strong></h2>

        <a href="https://psilva999.github.io/cartola-g12/">REFAZER</a>

        <img src={ Time }/>
      </span>

      {/* <Footer/> */}
    </>
  )
}

export default App
