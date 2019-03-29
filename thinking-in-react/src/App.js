import React, { Component } from 'react';
import './App.css';

class SearchBar extends Component {
  render() {
    return "a"
  }
}
class ProductTable extends Component {

  render() {
    let rows = [];
    rows.push(<ProductRow name={this.props.products[0].name} price="33" />);
    rows.push(<ProductRow name={this.props.products[1].name} price="44" />);
    rows.push("test2");

    return (
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          <ProductCategoryRow />
          {rows}
        </tbody>

      </table>
    )
  }
}
class ProductCategoryRow extends Component {
  render() {
    const category = "mycategory";
    return (
      <tr>
        <th>
        {category}
        </th>
      </tr>
    )
  }
}
class ProductRow extends Component {
  render() {
    return (
      <tr>
        <td>{this.props.name}</td>
        <td>{this.props.price}</td>
      </tr>
        )
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

const PRODUCTS = [
  {category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football'},
  {category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball'},
  {category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball'},
  {category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch'},
  {category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5'},
  {category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7'}
];

class App extends Component {
  render() {
    return (
      <div className="App">
          <FilterableProductTable products={PRODUCTS} />
      </div>
    );
  }
}

export default App;
