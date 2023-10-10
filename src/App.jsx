
import About from './About/About'
import './App.css'
import Banner from './Banner/Banner'
import Contact from './Contact/Contact'
import ExtraLine from './ExtraLine/ExtraLine'
import Footer from './Footer/Footer'
import Header from './Header/Header'
import Services from './Services/Services'
import TopHeader from './Top Header/TopHeader'

function App() {
  

  return (
    <div>
      <TopHeader/>
      <Header></Header>
      <Banner/>
      <ExtraLine/>
      <Services />
      <ExtraLine/>
      <About />
      <ExtraLine/>
      <Contact />
      <Footer/>
    </div>
  )
}

export default App
