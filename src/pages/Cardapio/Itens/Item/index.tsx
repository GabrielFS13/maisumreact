import classNames from 'classnames'
import styles from './Item.module.scss'


interface ItemProps {
    item: { title: string, description: string, photo: string, size: number, serving: number, price: number, id: number, category: { id: number, label: string } }
}

export default function Item({ item }: ItemProps) {
    return (
        <div className={styles.item}>
            <div className={styles.item__imagem}>
                <img src={item.photo} alt={item.title} />
            </div>
            <div className={styles.item__descricao}>
                <div className={styles.item__titulo}>
                    <h2>{item.title}</h2>
                    <p>{item.description}</p>
                </div>
                <div className={styles.item__tags}>
                    <div className={classNames({
                        [styles.item__tipo] : true,
                        [styles[`item__tipo__${item.category.label.toLowerCase()}`]] : true
                    })}>
                        {item.category.label}
                    </div>
                    <div className={styles.item__porcao}>
                        {item.size}g
                    </div>
                    <div className={styles.item__qtdpessoas}>
                        Serve {item.serving} pessoa{item.serving === 1 ? "" : "s"} 
                    </div>
                    <div className={styles.item__valor}>
                        R$ {item.price.toFixed(2).replace('.', ',')}
                    </div>
                </div>
            </div>
        </div>
    )
}