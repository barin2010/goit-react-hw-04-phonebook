import css from './Filter.module.css';
const Filter = ({ filter, handleFilterChange }) => (
  <div>
    <label className={css.label}>
      Filter contacts by name:
      <input
        className={css.input}
        type="text"
        name="filter"
        value={filter}
        onChange={handleFilterChange}
      />
    </label>
  </div>
);

export { Filter };
