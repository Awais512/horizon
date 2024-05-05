import { HeaderBox } from "@/components/header-box";
import { RightSidebar } from "@/components/right-sidebar";
import { TotalBalanceBox } from "@/components/total-balance-box";

export default function Home() {
  const loggedIn = {
    firstName: "Awais",
    lastName: "Raza",
    email: "awais@gmail.com",
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
        RECENT TRANSACTION
      </div>
      <RightSidebar
        user={loggedIn}
        transactions={[]}
        banks={[{ currentBalance: 123.5 }, { currentBalance: 500.45 }]}
      />
    </section>
  );
}
