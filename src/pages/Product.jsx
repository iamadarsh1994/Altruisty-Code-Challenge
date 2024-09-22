import PropTypes from 'prop-types';

const Product = ({ name, category, price }) => {
  return (
    <div className="border p-4 rounded-lg shadow-md">
      <h2 className="text-lg font-bold">{name}</h2>
      <p className="text-gray-600">{category}</p>
      <p className="text-gray-800">${price}</p>
    </div>
  );
};

// PropTypes validation
Product.propTypes = {
  name: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

export default Product;
