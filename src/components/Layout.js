import { Component } from "react";

const styles = {
    layout: {
        color: '#0A283E',
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
    },
    container: {
        width: '800px',
    }
}

class Layout extends Component{
    render() {
        return (
            <div style={styles.layout}>
                <div style={styles.container}>
                    {this.props.children}
                </div>
            </div>
        )
    }
}

export default Layout;