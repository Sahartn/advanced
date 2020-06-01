import React from 'react';
import './App.css';
import ProductsTable from './ProductsTable';






function App (props){
  return (
    <div className="App">
<ProductsTable products={props.products} />


    </div>
  );}


export default App;
