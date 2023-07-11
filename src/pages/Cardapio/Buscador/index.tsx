import style from './buscador.module.scss'
import {CgSearch} from 'react-icons/cg'
interface IBuscador{
    busca: string,
    setBusca: React.Dispatch<React.SetStateAction<string>>

}

export default function Buscador({busca, setBusca} : IBuscador){
    return(
        <div className={style.buscador}>
            <input type="text"
            value={busca}
            onChange={(e) => setBusca(e.target.value)}
            placeholder='Buscar'
            />
            <CgSearch size={20} color="#4C4D5E"/>
        </div>
    )
}