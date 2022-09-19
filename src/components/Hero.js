import { Component } from "react";

const styles = {
    container: {
        backgroundColor: '#7FD1AE',
        margin: 0,
        padding: '5px',
        display: 'flex',
        flexDirection: 'column',
        boxShadow: '0 .8em 1.4em rgb(0,0,0,0.1)'
    },
    text: {
        margin: 3,
        padding: '0px 6em 4px 6em',
        textAlign: 'center',
        fontWeight: 400,
        color: '#fff',
    }
}

class Hero extends Component{
    render() {
        const {hero} = this.props

        return (
            <div style={styles.container}>
                <p style={styles.text}> {hero.map(elem => elem.m)}</p>
                <p style={styles.text}> {hero.map(elem => elem.v)}</p>
            </div>
        )
    }
}

export default Hero;