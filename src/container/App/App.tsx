import Header from 'container/Header/Header'
import CssBaseline from '@mui/material/CssBaseline' //для типу відміни стилів, робить базовий ресет
import Footer from 'container/Footer/Footer'
import Home from 'pages/Home/Home'
import { Route, Routes } from 'react-router-dom'
import Favorites from 'pages/Favorites/Favorites'
import { useAppDispatch } from 'redux/hooks'
import { useEffect } from 'react'
import { fetchProducts } from 'redux/productsReducer'
import UniquePage from 'pages/UniquePage/UniquePage'
type Props = {}

function App(props: Props) {
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(fetchProducts())
    })

    return (
        <>
            <CssBaseline />
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/favorites" element={<Favorites />} />
                <Route path="/unique/:id" element={<UniquePage />} />
            </Routes>
            <Footer />
        </>
    )
}

export default App
