import { useEffect, useState } from 'react'
import Item from './Item'
import styles from './Itens.module.scss'
import cardapio from './itens.json'

interface ItensProps{
    filtro: number | null,
    ordenador: string,
    busca: string
}
export default function Itens({filtro, ordenador, busca} : ItensProps){

    const [lista, setLista] = useState(cardapio)

    function testabusca(title: string){
        const regex = new RegExp(busca, 'i')
        return regex.test(title)
    }

    function testaFiltro(categoria: number | null){
        if(filtro !== null) return filtro === categoria
        return true
    }

    function ordenar(newList: typeof cardapio){
        switch(ordenador){
            case "porcao":
                return newList.sort((a, b) => a.size > b.size ? 1 : - 1)
            case "qtd_pessoas":
                return newList.sort((a,b) => a.serving > b.serving ? 1 : -1)
            case "preco":
                return newList.sort((a, b) => a.price > b.price ? 1 : -1)
            default:
                return newList
        }
    }

    useEffect(() =>{
        const novaLista = cardapio.filter(item => testabusca(item.title) && testaFiltro(item.category.id))
        setLista(ordenar(novaLista))

    }, [busca, filtro, ordenador])
    return(
        <div className={styles.itens}>
            {lista.map(item => (
                <Item item = {item} key = {item.id}/>
            ))}
        </div>
    )
}