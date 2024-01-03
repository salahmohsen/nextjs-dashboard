import Card from "../ui/dashboard/card/card";
import Chart from "../ui/dashboard/chart/chart";
import RightBar from "../ui/dashboard/rightBar/rightBar";
import Transactions from "../ui/dashboard/transactions/transactions";

const Dashboard = () => {
  return (
    <div className="flex gap-5 mt-5">
      <div className="flex-1 flex-col gap-10 flex">
        <div className="flex flex-row justify-between gap-5">
          <Card />
          <Card />
          <Card />
        </div>
        <Transactions />
        <Chart />
      </div>
      <div className=" min-w-44">
        <RightBar />
      </div>
    </div>
  );
};

export default Dashboard;
