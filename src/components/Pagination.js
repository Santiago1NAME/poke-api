import FlechaL from "../assets/img/Flecha-Izquierda.png";
import FlechaR from "../assets/img/Flecha-Derecha.png";

const Pagination = ({ backPage, nexPage, paginaI, count, cantxP}) =>{
    let pageA = Math.trunc((count / cantxP) + 1);
    return(
        <div className="pagination">
            {( paginaI > 1 ?
                <button className="pagination-button" onClick={ backPage }><img src={ FlechaL } alt=""/></button>
            :
                <button disabled className="pagination-button" onClick={ backPage }><img src={ FlechaL } alt=""/></button>
            )}
            <div className="pagination-mid">
                <p>Pagina </p>
                <input type="text" value={ paginaI } disabled/>
                <p>De { pageA }</p>
            </div>
            {( paginaI < pageA ?
                <button className="pagination-button" onClick={ nexPage }><img src={ FlechaR } alt=""/></button>
            :
                <button disabled className="pagination-button" onClick={ nexPage }><img src={ FlechaR } alt=""/></button>
            )}
        </div>
    )
}

export default Pagination;