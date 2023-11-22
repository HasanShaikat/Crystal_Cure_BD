import About from './About/About'
import './App.css'
import Banner from './Banner/Banner'
import Contact from './Contact/Contact'
import ExtraLine from './ExtraLine/ExtraLine'
import Faq from './Faq/Faq'
import Footer from './Footer/Footer'
import Header from './Header/Header'
import Services from './Services/Services'
import TopHeader from './Top Header/TopHeader'

function App() {

  return (
    <div>
      <TopHeader />
      <Header />
      <Banner/>
      <ExtraLine/>
      <Services />
      <ExtraLine />
      <About />
      <ExtraLine />
      <Faq />
      <ExtraLine />
      <Contact />
      <ExtraLine />
      <Footer />
    </div>
  )
}

export default App