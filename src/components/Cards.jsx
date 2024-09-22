// import React from 'react';
import PropTypes from 'prop-types';

export default function Cards(props) {
  const { title, description, image, buttonLabel, onButtonClick } = props;

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <img className="w-full h-48 object-cover" src={image} alt={title} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">{description}</p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <button
          onClick={onButtonClick}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
        >
          {buttonLabel}
        </button>
      </div>
    </div>
  );
}

Cards.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  buttonLabel: PropTypes.string.isRequired,
  onButtonClick: PropTypes.func.isRequired,
};
