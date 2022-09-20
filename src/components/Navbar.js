import { Component } from "react";
import Logo from './Logo';
import Chart from './Chart';

const styles ={
    navbar: {
        display: 'flex',
        flexDirection: 'rox',
        alignItems: 'center',
        height: '4em',
        justifyContent: 'space-between',
        position: 'relative',
        padding: '0 1.5em',
        boxShadow: '0 .8em 1.4em rgb(0,0,0,0.2)',
        backgroundColor: '#364954',
        color: '#fff'
    }
}

class Navbar extends Component{
    render() {
        const {chart, showingChart, showChart, deleteChart} = this.props
        return (
            <nav style={styles.navbar}>
                <Logo />
                <Chart 
                    chart={chart} 
                    showingChart={showingChart} 
                    showChart={showChart}
                    deleteChart={deleteChart}/>
            </nav>
        )
    }
}

export default Navbar;