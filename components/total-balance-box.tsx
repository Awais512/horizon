import { AnimatedCounter } from "./animated-counter";
import Doughnut from "./doughnut-chart";

export const TotalBalanceBox = ({
  accounts = [],
  totalBanks,
  totalCurrentBalance,
}: TotalBalanceBoxProps) => {
  return (
    <section className="total-balance">
      <div className="total-balance-chart">
        <Doughnut accounts={accounts} />
      </div>
      <div className="flex flex-col gap-6">
        <h2 className="header-2">
          {totalBanks === 1
            ? `${totalBanks} Bank Account`
            : `${totalBanks} Bank accounts`}
        </h2>
        <div className="flex flex-col gap-2">
          <p className="total-balance-label">Total Current Balance</p>
          <div className="total-balance-amount flex-center">
            <AnimatedCounter amount={totalCurrentBalance} />
          </div>
        </div>
      </div>
    </section>
  );
};
