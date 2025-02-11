import "./Filter.css";

const Filter = ({ years, selectedYear, setSelectedYear }) => {
  return (
    <div className="expenses-filter">
      <label>Filter by year</label>
      <select
        value={selectedYear}
        onChange={(event) => {
          setSelectedYear(event.target.value);
        }}
      >
        {years.map((y) => {
          return (
            <option value={y} key={y}>
              {y}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default Filter;
