import PropTypes from 'prop-types';
import { getProfileURL } from 'utils';

export const CastItem = ({ profile_path, name, character }) => {
  return (
    <li className="flex gap-1 bg-slate-200 rounded-md relative overflow-hidden">
      {profile_path ? (
        <img
          srcSet={`${getProfileURL('w185', profile_path)} 1x,
                          ${getProfileURL('h632', profile_path)} 2x`}
          src={getProfileURL('w185', profile_path)}
          alt="Profile poster"
          width={185}
          height={278}
          className="w-full object-cover rounded-md"
        />
      ) : (
        <img
          src="https://placehold.co/185x278?text=No+Image"
          alt="No Profile poster"
          width={185}
          height={278}
          className="w-full object-cover rounded-md"
        />
      )}

      <div
        className="absolute bg-gradient-to-t bottom-0 left-0
              from-slate-800/50 via-slate-800/50 to-transparent
                text-white p-2 w-full"
      >
        <h3 className="text-lg">{name}</h3>
        <p>Character: {character}</p>
      </div>
    </li>
  );
};

CastItem.propTypes = {
  profile_path: PropTypes.string,
  name: PropTypes.string.isRequired,
  character: PropTypes.string.isRequired,
};
