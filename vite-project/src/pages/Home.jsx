import Header from '../components/Header.jsx'
import Footer from '../components/Footer.jsx'
import { PlaceholderHomeMain } from '../components/PlaceholderData.jsx'

export default function Home () {
    document.title = 'Argent Bank - Home Page'

    return <>
        <Header/>

        <PlaceholderHomeMain/>

        <Footer/>
    </>
}