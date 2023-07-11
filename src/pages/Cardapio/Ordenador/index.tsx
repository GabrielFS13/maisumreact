import styles from './ordenador.module.scss'
import op from './opcoes.json'
import { useState } from 'react'
import classNames from 'classnames'
import {MdKeyboardArrowDown, MdKeyboardArrowUp} from 'react-icons/md'


interface OrdenadorProps{
    ordenador: string,
    setOrdenador: React.Dispatch<React.SetStateAction<string>>
}
export default function Ordenador({ordenador, setOrdenador} : OrdenadorProps) {
    const [aberto, setAberto] = useState(false)
    const nomeOrdenador = ordenador && op.find(val => val.value === ordenador)?.nome
    return (
        <button className={classNames({[styles.ordenador] : true,
        [styles["ordenador--ativo"]] : ordenador})} 
        onClick = {() => setAberto(!aberto)}
        onBlur={() => setAberto(false)}
        >   
        {/* ordenador.charAt(0).toLocaleUpperCase() + ordenador.slice(1) <- achei minha solução mais legal :D */}
            <span>{ nomeOrdenador || "Ordernar Por: "}</span>
            {
                aberto ? <MdKeyboardArrowUp size={20}/> : <MdKeyboardArrowDown size={20}/>
            }
            <div className={classNames({[styles.ordenador__options] : true, [styles["ordenador__options--ativo"]] : aberto})}>
                {op.map(opcao => (
                    <div className={styles.ordenador__option} key={opcao.value} onClick={ () => setOrdenador(opcao.value)}>
                        {opcao.nome}
                    </div>
                ))}
            </div>
        </button>
    )
}