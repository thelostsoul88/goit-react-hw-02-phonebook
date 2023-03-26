import { nanoid } from 'nanoid';
import css from './Filter.module.css';

const labelId = nanoid();
const Filter = ({ handleFilter, state }) => {
  return (
    <div className={css.filterContainer}>
      <label htmlFor={labelId} className={css.filterLabel}>
        Find contacts by name
      </label>
      <input
        onChange={e => {
          handleFilter(e.currentTarget.value.trim());
        }}
        name="name"
        type="text"
        value={state.filter}
        className={css.filterInput}
      />
    </div>
  );
};

export default Filter;
