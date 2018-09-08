import './Products.css';
import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { PageHeader, ListGroup, ListGroupItem } from "react-bootstrap";

export const Component = ({ list, handleProductClick }) => (
      <div className="Products" >
            <PageHeader>Your Products</PageHeader>
            <ListGroup>
                  { list.map( item => (
                  <ListGroupItem
                        key={item.noteId}
                        header={item.name}
                        onClick={handleProductClick}>
                        <Link to={`/products/${item.noteId}`}>
                              {"Created: " + new Date(item.createdAt).toLocaleString()}
                        </Link>
                  </ListGroupItem>
                  ))}
            </ListGroup>
      </div>
);

Component.propTypes = { };

export default Component;

