import './Products.css';
import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { PageHeader, ListGroup, ListGroupItem } from "react-bootstrap";

export const Products = ({ list, handleProductClick }) => (
      <div className="Products" >
            <PageHeader>Your Products</PageHeader>
            {! list.length ?
            <div>No items entered yet</div> :
            <ListGroup>
                  { list.map( item => (
                  <ListGroupItem
                        key={item.noteId}
                        header={item.name}
                        onClick={handleProductClick}>
                        <Link to={`/auth/product/${item.noteId}`}>
                              {"Created: " + new Date(item.createdAt).toLocaleString()}
                        </Link>
                  </ListGroupItem>
                  ))}
            </ListGroup>
            }
      </div>
);

Products.propTypes = { };

export default Products;

