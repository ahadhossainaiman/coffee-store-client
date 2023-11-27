
import { useLoaderData } from 'react-router-dom'
import './App.css'
import FeatureSection from './components/FeatureSection/FeatureSection'
import HeroSection from './components/HeroSection/HeroSection'
import ProductsSection from './components/ProductsSection/ProductsSection'
import Navber from './components/navber/Navber'

function App() {
  const data = useLoaderData()


  return (
    <>
    <Navber/>
    <HeroSection/>
    <FeatureSection/>
    <ProductsSection data={data}/>
      <h1>Home</h1>
    </>
  )
}

export default App
