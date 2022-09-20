import { Component } from "react";

const styles = {
    chartDetail: {
        backgroundColor: '#9DAEB6',
        position: 'absolute',
        marginTop: 16,
        boxShadow: '0 .8em 1.4em rgb(0,0,0,0.1)',
        borderRadius: '5px',
        width: '300px',
        right: 25,
    },
    ul: {
        margin: 0,
        padding: 0
    },
    li:{
        listStyleType: 'none',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '18px 18px',
        borderBottom: 'solid 1px #fff'
    },
    deleteButton: {
        borderRadius: '50px',
        color: '#fff',
        backgroundColor: '#CF9BC3',
        border: 'solid .1em #fff',
        boxShadow: '0 .2em .2em rgb(0, 0, 0, 0.1)'
    }
}

class ChartDetail extends Component{
    render() {
        const {chart, deleteChart} = this.props
        return (
            <div style={styles.chartDetail}>
                <ul style={styles.ul}>
                    {chart.map(elem => <li key={elem.name} style={styles.li}>
                        <img alt={elem.name} src={elem.img} width='40' height='30'/>
                        <span>{elem.name}</span>
                        <span>{elem.quantity}</span>
                        <button style={styles.deleteButton} onClick={deleteChart}>X</button>
                    </li>)}
                </ul>
            </div>
        )
    }
}

export default ChartDetail;