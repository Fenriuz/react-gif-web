import PropTypes from 'prop-types';
import useFetchGifs from '../hooks/useFetchGifs';
import GifGridItem from './GifGridItem';

const GifGrid = ({ category }) => {
  const { data: images, loading } = useFetchGifs(category);

  return (
    <>
      <h3 className="animate__animated animate__fadeIn">{category}</h3>
      {loading && <p className="animate__animated animate__flash">Loading...</p>}
      <div className="card-grid">
        {images.map(({ id, title, url }) => (
          <GifGridItem key={id} title={title} url={url} />
        ))}
      </div>
    </>
  );
};
GifGrid.propTypes = {
  category: PropTypes.string.isRequired,
};

export default GifGrid;
