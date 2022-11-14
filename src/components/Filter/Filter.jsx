import PropTypes from 'prop-types';
import '../Filter/Filter.module.css';

export const Filter = ({ value, onChange }) => (
  <label>
    <input
      type="text"
      name='filter'
      value={value}
      onChange={onChange}
      placeholder="Find contacts by name"
    />
  </label>
);

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  changeFilterInput: PropTypes.func.isRequired,
};