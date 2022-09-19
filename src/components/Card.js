import { Component } from "react";
import Button from './Button';

const styles = {
    card: {
        border: 'solid .1em #BCBCBC',
        boxShadow: '0 .2em .2em rgb(0, 0, 0, 0.1)',
        width: '30%',
        padding: '8px 10px',
        borderRadius: '5px',
        margin: '.6em',
    },
    img: {
        width: '100%',
        height: '6em'
    }
}

class Card extends Component{
    render() {
        const {product, addToChart} = this.props

        return (
            <div style={styles.card}>
                <img alt={product.name} src={product.img} style={styles.img}/>
                <h3>{product.name}</h3>
                <p>{product.price} €</p>
                <Button onClick={() => addToChart(product)}>Add to chart</Button>
            </div>
        )
    }
}

export default Card;