import "./ChartBar.css";

const ChartBar = ({ month }) => {
  return (
    <div className="chart-bar">
      <div className="chart-bar__inner">
        <div className="chart-bar__fill"></div>
      </div>
      <div className="chart-bar__label">{month}</div>
    </div>
  );
};

export default ChartBar;
