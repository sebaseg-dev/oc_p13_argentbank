import Header from '../components/Header.jsx'
import Footer from '../components/Footer.jsx'

export default function NotFound() {
  document.title = 'Argent Bank - Page Not Found'

  return <>
    <Header />
    <h1>NotFound</h1>
    <Footer />
  </>
}