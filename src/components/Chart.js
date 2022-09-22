import { Component } from "react";
import BubbleAlert from './BubbleAlert';
import ChartDetail from './ChartDetail';

const styles = {
    chart: {
        backgroundColor: '#CF9BC3',
        color: '#fff',
        border: 'none',
        borderRadius: '2em',
        padding: '10px',
        cursor: 'pointer',
        marginBottom: '1em',

    },
    bubble: {
        position: 'relative',
        left: -12,
        top: 15,
    }
}

class Chart extends Component{
    render() {
        const {chart, showingChart, showChart, deleteChart} = this.props
        const value = chart.reduce((acc, elem) => acc + elem.quantity, 0)
        return (
            <div>
                <span style={styles.bubble}>
                    {value !== 0 ? <BubbleAlert value={value}/> : null}
                </span>
                <button style={styles.chart} onClick={showChart}>
                    Chart
                    <img alt='chart' src={'./products/chart.svg'}/>
                </button>
                {showingChart ? <ChartDetail chart={chart} deleteChart={deleteChart}/> : null}
            </div>
        )
    }
}

export default Chart;