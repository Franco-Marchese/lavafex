import { Component } from "react";

const styles = {
    logo: {
        fontWeight: '700',
        fontSize: '1.3rem',
    }
}

class Logo extends Component{
    render() {
        return (
            <div style={styles.logo}>Lavafex</div>
        )
    }
}

export default Logo;