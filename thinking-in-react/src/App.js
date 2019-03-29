import React, { Component } from 'react';
import './App.css';

class SearchBar extends Component {
  render() {
    return "a"
  }
}
class ProductTable extends Component {
  render() {
    return (

      <table>
        {this.props.products}
      </table>
    )
  }
}
class ProductCategoryRow extends Component {
  render() {
    return "c"
  }
}
class ProductRow extends Component {
  render() {
    return "d"
  }
}


class FilterableProductTable extends Component {
  render() {
    return (

    <div>
      <SearchBar />
      <ProductTable
        products = {this.props.products}
      />
    </div>

  )}
}

class App extends Component {
  render() {
    return (
      <div className="App">
          <FilterableProductTable products={"testproducts"} />
      </div>
    );
  }
}

export default App;
