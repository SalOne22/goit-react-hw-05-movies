import PropTypes from 'prop-types';
import { CastItem } from './CastItem';

export const CastList = ({ cast = [] }) => {
  return (
    <ul className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-2 ">
      {cast.map(({ id, profile_path, name, character }) => (
        <CastItem
          key={id}
          profile_path={profile_path}
          name={name}
          character={character}
        />
      ))}
    </ul>
  );
};

CastList.propTypes = {
  cast: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      profile_path: PropTypes.string,
      name: PropTypes.string.isRequired,
      character: PropTypes.string.isRequired,
    })
  ),
};
