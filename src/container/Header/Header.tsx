import { Button } from '@mui/material'
import { Link } from 'react-router-dom'

type Props = {}
const Header = (props: Props) => {
    return (
        <div className="header">
            <Link to="/">
                {' '}
                <Button variant="outlined">Home</Button>
            </Link>
            <Link to="/favorites">
                {' '}
                <Button variant="outlined">Favorites</Button>
            </Link>
        </div>
    )
}
export default Header
