import '../styles/Play.css';
import './script.js';

function Play() {
    const title = 'Aouv.fr';
    return (
        <div className='card'>
            <h2>Select category</h2>
            <select value='test'>
                <option value="A">Catégorie 1</option>
                <option value="B">Catégorie 2</option>
                <option value="C">Catégorie 3</option>
            </select>

            <div id="phrase"></div>
            <div className='button'>
                <button className='action' onClick='action()'>Action</button>
                <p>Ou</p>
                <button className='verite' onClick='verite()'> Vérité</button>
            </div>
        </div>
    )
}

export default Play