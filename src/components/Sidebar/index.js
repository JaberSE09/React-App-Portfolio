import './index.scss'
import LogoS from '../../assets/images/sajidjaber-removebg-preview.png'
import LogoSubtitle from '../../assets/images/logo_sub.png'
import {Link} from 'react-router-dom'
const Sidebar = () => {
  return (
    <div className="nav-bar">
      <Link className="logo" to="/">
        <img src={LogoS} alt="logo" />
        <img className="sub-logo" src={LogoSubtitle} alt="slogan" />
      </Link>
    </div>
  )
}

export default Sidebar
