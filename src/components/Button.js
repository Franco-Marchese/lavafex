import { Component } from "react";

const styles = {
    button: {
        backgroundColor: '#CF9BC3',
        color: '#fff',
        border: 'none',
        borderRadius: '5px',
        padding: '.8em',
        cursor: 'pointer',
        width: '100%'
    },
}

class Button extends Component{
    render() {
        return (
            <div>
                <button style={styles.button} {...this.props}/>
            </div>
        )
    }
}

export default Button;