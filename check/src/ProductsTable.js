import React from 'react';
import PropTypes from 'prop-types';




const ProductsTable = ({products}) => {
    return (
<table class="table table-dark">
  <thead>
    <tr>
      <th scope="col">name</th>
      <th scope="col">category</th>
      <th scope="col">price</th>
    </tr>
  </thead>
  <tbody>
  {products.map((el,i)=><tr key={i}>
<td>{el.name}</td>
    <td>{el.category}</td>
    <td>{el.price}</td>
</tr>)}
</tbody>
</table>
 )
 ;

    };

ProductsTable.propTypes= {
  products:PropTypes.arrayOf(PropTypes.exact({

  name:PropTypes.string,
  category:PropTypes.string,
  price:PropTypes.string,
 }
 ))
}
export default ProductsTable;