import { Button } from '@mui/material'
import { Link } from 'react-router-dom'
import './Header.scss'

type Props = {}
const Header = (props: Props) => {
    return (
        <div className="header">
            <div className="buttonsDiv">
                <Link to="/" style={{ textDecoration: 'none' }}>
                    <Button className="headerButton" variant="outlined">
                        Home
                    </Button>
                </Link>
                <Link to="/favorites" style={{ textDecoration: 'none' }}>
                    <Button className="headerButton" variant="outlined">
                        Favorites
                    </Button>
                </Link>
            </div>
        </div>
    )
}
export default Header
