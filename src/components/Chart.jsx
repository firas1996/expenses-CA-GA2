import "./Chart.css";
import ChartBar from "./ChartBar";

const Chart = ({ data }) => {
  const chartData = [
    { label: "Jan", value: 0 },
    { label: "Fev", value: 0 },
    { label: "Mar", value: 0 },
    { label: "Avr", value: 0 },
    { label: "May", value: 0 },
    { label: "Jui", value: 0 },
    { label: "Jul", value: 0 },
    { label: "Aug", value: 0 },
    { label: "Sep", value: 0 },
    { label: "Oct", value: 0 },
    { label: "Nov", value: 0 },
    { label: "Dec", value: 0 },
  ];
  for (const elemnt of data) {
    chartData[elemnt.date.getMonth()].value += elemnt.price;
  }
  const max = Math.max(...chartData.map((el) => el.value));
  const total = 0;
  return (
    <div className="chart">
      {chartData.map((element) => {
        return (
          <ChartBar month={element.label} value={element.value} max={max} />
        );
      })}
    </div>
  );
};

export default Chart;
