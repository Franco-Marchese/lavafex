import { Component } from "react";

const styles = {
    container: {
        backgroundColor: '#364954',
        color: '#fff',
        textAlign: 'center',
        justifyContent: 'space-between',
        height: '4em',
        marginTop: 'auto',
    }
}

class Footer extends Component{
    render() {
        return(
            <div style={styles.container}>Something</div>
        )
    }
}

export default Footer;