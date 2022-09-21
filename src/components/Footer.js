import { Component } from "react";

const styles = {
    container: {
        backgroundColor: '#364954',
        color: '#fff',
        textAlign: 'center',
        justifyContent: 'space-between',
        height: '4em',
        marginTop: 'auto',
        padding: '1.2em',
    },
    img: {
        height: '3em',
        width: '3em',
        margin: 0,
        borderRadius: '50px'
        
    },
    line: {
        margin: 0,
        fontWeight: 300,
    }
}

class Footer extends Component{
    render() {
        return(
            <div style={styles.container}>
                <img alt='react-logo' src="/products/favicon.ico" style={styles.img}/>
                <p style={styles.line}>Created with create react app by Franco Marchese</p>
            </div>
        )
    }
}

export default Footer;