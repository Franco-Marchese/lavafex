import { Component } from "react";
import Hero from './Hero';

const styles = {
    container: {
        backgroundColor: '#CF9BC3',
    },
    line: {

    }
}

class HeroButton extends Component{
    render() {
        const {showingValues, showValues, hero} = this.props
        return (
            <div style={styles.container} onClick={showValues}>
                <p style={styles.line}>What moves us?</p>
                <div>{showingValues ? <Hero hero={hero}/> : null}</div>
            </div>
        )
    }
}
export default HeroButton;