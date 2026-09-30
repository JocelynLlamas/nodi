import { FieldProvider } from './lib/field'
import FieldCursor from './components/FieldCursor'
import Navbar from './components/Navbar'
import Hero from './sections/Hero'
import Transition from './sections/Transition'
import BigWords from './sections/BigWords'
import OneNodi from './sections/OneNodi'
import AnywherePlace from './sections/AnywherePlace'
import AnywhereForm from './sections/AnywhereForm'
import YourBusiness from './sections/YourBusiness'
import FinalConnect from './sections/FinalConnect'
import Footer from './sections/Footer'

export default function App() {
  return (
    <FieldProvider>
      <FieldCursor />
      <Navbar />
      <main>
        <Hero />
        <Transition />
        <BigWords />
        <OneNodi />
        <AnywherePlace />
        <AnywhereForm />
        <YourBusiness />
        <FinalConnect />
      </main>
      <Footer />
    </FieldProvider>
  )
}
