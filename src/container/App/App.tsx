import Header from 'container/Header/Header'
import CssBaseline from '@mui/material/CssBaseline' //для типу відміни стилів, робить базовий ресет
import Footer from 'container/Footer/Footer'
import Home from 'pages/Home/Home'
import { Route, Routes } from 'react-router-dom'
import Favorites from 'pages/Favorites/Favorites'
type Props = {}

function App(props: Props) {
    return (
        <>
            <CssBaseline />
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/favorites" element={<Favorites />} />
            </Routes>
            <Footer />
        </>
    )
}

export default App
