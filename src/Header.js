import './Style.css';
import { Link } from 'react-router-dom';

export default function Header(){
    return (
        <div className="header">
            <div className='information'>
                <div>
                    <Link to='/' style={{textDecoration: 'none'}}><p>Home</p></Link>
                </div>
                <div>
                    <Link to='/about' style={{textDecoration: 'none'}}><p>About Us</p></Link>
                </div>
                <div>
                    <Link to='moreInfo' style={{textDecoration: 'none'}}><p>More Info</p></Link>
                </div>
                <div>
                    <Link to='/contactUs' style={{textDecoration: 'none'}}><p>Contact</p></Link>
                </div>
            </div>
        </div>
 )
}