import logo from '../assets/logo.png'
import '../styles/Banner.css'

function Banner() {
    const title = 'Aouv.fr'
    return (
        <div className='lmj-banner'>
            <a href=''>Lien 1</a>
            <a href=''>Lien 2</a>
            <a href=''>Lien 3</a>
            <img src={logo} alt='Aouv.fr' className='lmj-logo' />
            <h1 className='lmj-title'>{title}</h1>
        </div>
    )
}

export default Banner