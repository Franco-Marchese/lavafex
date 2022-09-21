import {Component} from 'react';
import Deck from './components/Deck';
import Layout from './components/Layout';
import Title from './components/Title';
import Navbar from './components/Navbar';
import HeroButton from './components/HeroButton';
import Footer from './components/Footer';

const styles = {
    main: {
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
    } 
}

class App extends Component {

/*Data for the website*/
  state = {
    hero: [
      {m: 'Our mission is, through our car wash service, to make you feel safe with the things you carry and/or use in your day-to-day life. With the use of our technology and experience to satisfy our customers.', 
      v: 'Our vision is to be the most outstanding cleaning center for its quality and trustworthy service, grouping together different daily hygiene and cleaning services.',
      mTitle: 'Our mision.',
      vTitle: 'Out Vision.'}
    ],
    productos: [
      {name: 'Carpet wash', price: '25', img: '/products/alfombra.jpg'},
      {name: 'Car wash', price: '30', img: '/products/auto.jpg'},
      {name: 'Office wash', price: '45', img: '/products/oficina.jpg'},
      {name: 'Clothes wash', price: '6', img: '/products/ropa.jpg'},
    ],
    chart: [],
    showingChart: false,
    showingValues: false,
  }
/*----------------------------------------------------------------------------*/

/*Functions to the website*/
addToChart = (product) => {
  const {chart} = this.state
  if (chart.find(elem => elem.name === product.name)) {
    const newChart = chart.map(elem => elem.name === product.name ? 
      ({
        ...elem,
        quantity: elem.quantity + 1
      })
      : elem)
    return this.setState({chart: newChart})
  }

  return this.setState({
    chart: this.state.chart.concat({
      ...product,
      quantity: 1,
    })
  })
}

deleteFromChart = (product) => {
  const {chart} =this.state
  if (chart.find(elem => elem.name === product.name && elem.quantity > 0)) {
    const newChart = chart.map(elem => elem.name === product.name ? 
      ({
        ...elem,
        quantity: elem.quantity - 1
      })
      : elem)
      if (newChart.find(elem => elem.quantity === 0)) {
        let toDelete = 0
        const chartChecked = newChart.map(elem => elem.quantity === 0 ? 
          (
            toDelete = newChart.indexOf(elem)
          )
          : elem)
        chartChecked.splice(toDelete, 1)
        return this.setState({chart: chartChecked})
      }
      return this.setState({chart: newChart})
  }
}

showChart = () => {
  if (!this.state.chart.length){
    return
  }
  this.setState({showingChart: !this.state.showingChart})
}

showValues = () => {
  this.setState({showingValues: !this.state.showingChart})
  if (this.state.showingValues === false){
    return
  }
}
/*----------------------------------------------------------------------------*/
  render() {
    const {showingChart, showingValues} = this.state
    return (
      <div styles={styles.main}>
        <Navbar 
          chart={this.state.chart} 
          showingChart={showingChart} 
          showChart={this.showChart}
          deleteChart={this.deleteFromChart}
        />
        <HeroButton 
        showingValues={showingValues} 
        showValues={this.showValues} 
        hero={this.state.hero}
        />
        <Layout>
          <Title />
          <Deck 
            addToChart={this.addToChart}
            products={this.state.productos}
            />
        </Layout>
        <Footer />
      </div>
    )
  }
}

export default App;
