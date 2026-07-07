import { useState } from 'react'
import style from './App.module.css'
import "bootstrap/dist/css/bootstrap.min.css"
import Display from './component/display'
import ButtonCont from "./component/buttonContainer"
function App() {
  return <div className={style.calculator}>
    <Display></Display>
    <ButtonCont></ButtonCont>
  </div>
}

export default App
