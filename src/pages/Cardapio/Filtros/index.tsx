import style from './filtro.module.scss'
import classNames from 'classnames'

const filtros = [
    {
        "label": "Massas",
        "id": 1
    },
    {
        "label": "Carnes",
        "id": 2
    },
    {
        "label": "Combos",
        "id": 3
    },
    {
        "label": "Veganos",
        "id": 4
    }
]

interface IFiltro{
    filtro: number | null,
    setFiltro: React.Dispatch<React.SetStateAction<number | null>>
}
export default function Filtros({filtro, setFiltro}: IFiltro) {

    function selectFiltro(op: { label: string, id: number }) {
        if(filtro == op.id) return setFiltro(null)
        return setFiltro(op.id)
    }
    
    return (
        <div className={style.filtros}>
            {filtros.map(opcao => (
                <button className={classNames({
                    [style.filtros__filtro] : true,
                    [style['filtros__filtro--ativo']]: filtro == opcao.id
                })}  key={opcao.id} onClick={() => selectFiltro(opcao)}>{opcao.label}</button>
            ))}
        </div>
    )
}