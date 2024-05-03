import { HeaderBox } from "@/components/header-box";
import { TotalBalanceBox } from "@/components/total-balance-box";

export default function Home() {
  const loggedIn = {
    firstName: "Awais",
  };

  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox
            type="greeting"
            title="Welcome"
            user={loggedIn?.firstName || "Guest"}
            subtext="Access and Manage your account and transaction efficiently"
          />
          <TotalBalanceBox
            accounts={[]}
            totalBanks={1}
            totalCurrentBalance={1250.45}
          />
        </header>
      </div>
    </section>
  );
}
