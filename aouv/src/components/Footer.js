import '../styles/Footer.css';

function Footer() {
    const title = 'Aouv.fr';
    const dev = 'Lilian';
    const copyright = '\u00a9';
    return (
        <div className='footer'>
            <p>{title} By {dev} | 2022 {copyright}</p>
        </div>
    )
}

export default Footer