import {getImageUrl} from "./utils.js";
import PropTypes from "prop-types";

// 子组件：Avatar
function Avatar({person, size = 100}) {
  return (
    <img
      className="avatar"
      src={getImageUrl(person)}
      alt={person.name}
      width={size}
      height={size}
    />
  );
}
Avatar.propTypes = {
  person: PropTypes.shape({
    name: PropTypes.string,
    imageId: PropTypes.string,
  }),
  size: PropTypes.number
}

// 父组件：Profile
export default function Profile() {
  return (
    <div>
    <Avatar person={{name: 'Katsuko Saruhashi', imageId: 'YfeOqp2'}} size={100}/>
    <Avatar person={ {name: 'Lin Lanying', imageId: '1bX5QH6'}} size={100}/>
    </div>
  );
}
