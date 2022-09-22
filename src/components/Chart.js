import { Component } from "react";
import BubbleAlert from './BubbleAlert';
import ChartDetail from './ChartDetail';

const styles = {
    chartContainer: {
        display: 'flex',
        alignItems: 'center',
    },
    chart: {
        backgroundColor: '#CF9BC3',
        width: '2em',
        height: '2em',
        border: 'none',
        borderRadius: '2em',
        padding: '.2em',
        cursor: 'pointer',
        position: '',

    },
    bubble: {
        position: 'relative',
        left: 30,
        top: 12,
    },
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
                <div style={styles.chartContainer}>
                    <img 
                        alt='chart' 
                        src={'./products/chart.svg'} 
                        style={styles.chart} 
                        onClick={showChart}/>
                </div>
                {showingChart ? <ChartDetail chart={chart} deleteChart={deleteChart}/> : null}
            </div>
        )
    }
}

export default Chart;