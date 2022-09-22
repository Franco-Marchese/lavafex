import { Component } from "react";
import Hero from './Hero';

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',

    },
    line: {
        color: '#fff',
        textAlign: 'center',
        fontWeight: '850',
        backgroundColor: '#CF9BC3',
        padding: '.4em 1.4em',
        margin: 0,
        borderRadius: '0em 0em 1.4em 1.4em',
    }
}

class HeroButton extends Component{
    render() {
        const {showingValues, showValues, hero} = this.props
        return (
            <div style={styles.container} >
                <p style={styles.line} onClick={showValues}>What moves us?</p>
                {showingValues ? <Hero hero={hero}/> : null}
            </div>
        )
    }
}
export default HeroButton;