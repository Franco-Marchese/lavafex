import { Component } from "react";

const styles = {
    title: {
        marginBottom: '1em',
    }
}

class Title extends Component{
    render() {
        return (
            <h2 style={styles.title}>Book one of our services!</h2>
        )
    }
}

export default Title;