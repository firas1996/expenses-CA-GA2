import "./ChartBar.css";

const ChartBar = ({ month, value, max }) => {
  let avg = "0%";
  if (max > 0) {
    avg = (value / max) * 100 + "%";
  }
  return (
    <div className="chart-bar">
      <div className="chart-bar__inner">
        <div className="chart-bar__fill" style={{ height: avg }}></div>
      </div>
      <div className="chart-bar__label">{month}</div>
    </div>
  );
};

export default ChartBar;
