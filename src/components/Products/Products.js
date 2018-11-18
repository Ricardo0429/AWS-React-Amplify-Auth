import "./Products.css";
import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import routes from "../../config/routes";
import { PageHeader, ListGroup, ListGroupItem } from "react-bootstrap";

const Products = ({ list }) => (
      <div className="Products">
            <PageHeader>Your Products</PageHeader>
            {!list.length ? (
                  <div>No items entered yet</div>
            ) : (
                  <ListGroup>
                        {list.map(item => (
                              <ListGroupItem
                                    key={item.noteId}
                                    header={item.name}
                              >
                                    <Link
                                          to={`${routes.product}${item.noteId}`}
                                    >
                                          {`Created: ${new Date(
                                                item.createdAt
                                          ).toLocaleString()}`}
                                    </Link>
                              </ListGroupItem>
                        ))}
                  </ListGroup>
            )}
      </div>
);

Products.defaultProps = {
      list: []
}

Products.propTypes = {
      list: PropTypes.array
};

export default Products;
