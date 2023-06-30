


import React from 'react';
import products from './products.json';

export default function ProductsTable() {
  return <>
    <h2 className='text-center'>Product Table</h2>

    <table className='table table-bordered table-striped'>
        <tbody>
            {products.map((product)=>{
                return <tr key={product.id}>
                    <td>{product.title}</td>
                    <td>{product.price}</td>
                    <td>{product.description}</td>
                    <td>{product.category}</td>
                    
                    <td>{product.rating.rate}</td>
                    <td>{product.rating.count}</td>
                    <td><img src={product.image}width='100' height='100' /></td>
                </tr>
            })}
        </tbody>
    </table>
  </>
}