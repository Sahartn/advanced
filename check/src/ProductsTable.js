import React from 'react';
import App from './App';
import PropTypes from 'prop-types';



const ProductsTable = ({category,name,price}) => {
    return (
        <div>
          <table>
          <tr>
            <td>
           <p>category: {category}</p>
            </td>
          <td>
           <p> {name}</p>
          </td>
          <td>
            <p>{price}</p>
          </td>
          </tr>
         </table>
        </div>
 

 )
 ;

}
function ReactComponent(props) {
  // ...implement render logic here
}
ReactComponent.propTypes = {
  stringProp: PropTypes.string


}


export default ProductsTable
