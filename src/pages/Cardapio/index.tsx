import { useState } from 'react'
import Buscador from './Buscador'
import style from './cardapio.module.scss'
import Filtros from './Filtros'
import Ordenador from './Ordenador'
import Itens from './Itens'

export default function Cardapio() {

    const [busca, setBusca] = useState("")
    const [filtro, setFiltro] = useState<number | null>(null)
    const [ordenador, setOrdenador] = useState("")
    return (
        <main>
            <nav className={style.menu}>
                <img src="./assets/logo.svg" alt="Logo" />
            </nav>
            <header className={style.header}>
                <div className={style.header__text}>
                    A casa do código da massa
                </div>
            </header>
            <section className={style.cardapio}>
                <h3 className={style.cardapio__titulo}>Cardápio</h3>
                <Buscador busca={busca} setBusca={setBusca} />
                <div className={style.cardaio__filtros}>
                    <Filtros filtro={filtro} setFiltro = {setFiltro} />
                    <Ordenador ordenador = {ordenador} setOrdenador = {setOrdenador} />
                    <Itens busca={busca} filtro = {filtro} ordenador={ordenador} />
                </div>
            </section>
        </main>
    )
}