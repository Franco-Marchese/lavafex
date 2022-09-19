import { Component } from "react";
import Card from './Card';

const styles = {
    deck: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    }
}


class Deck extends Component{
    render() {
        const {products, addToChart} = this.props

        return (
            <div style={styles.deck}>
                {products.map(product =>
                    <Card
                        addToChart={addToChart}
                        key={product.name}
                        product={product}
                        />)}
            </div>
        )
    }
}

export default Deck;