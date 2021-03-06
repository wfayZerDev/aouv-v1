import logo from '../assets/logo.png'
import '../styles/Banner.css'

function Banner() {
    const title = 'Aouv.fr'
    return (
        <div className='lmj-banner'>
            <img src={logo} alt='Aouv.fr' className='lmj-logo' />
            <h1 className='lmj-title'>{title}</h1>
        </div>
    )
}

export default Banner
