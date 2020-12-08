import PropTypes from 'prop-types';

const GifGridItems = ({ title, url }) => (
  <div className="card animate__animated animate__fadeIn">
    <img src={url} alt={title} />
    <p>{title}</p>
  </div>
);

GifGridItems.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default GifGridItems;
