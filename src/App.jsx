

import './App.css'
import {Blog,Footer,Features,WhatGPT3,Possibility,Header} from './containers'
import {Feature,Article,Brand,CTA,Navbar} from './components'
function App() {
  
  return (
    <div className="">
      <div className=' gradient__bg'>
    <Navbar/>
    <Header/>
      </div>
      <Brand/>
      <WhatGPT3/>
      <Features/>
      <Possibility/>
      <CTA/>
      <Blog/>
      <Footer/>
    </div>
  )
}


export default App
