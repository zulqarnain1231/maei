import React from "react";
import WalletCard from "./WalletCard";
import SecurityCard from "./SecurityCard";

const MainPage = () => {
  return (
    <div className="w-full h-[calc(100vh-10px)] bg-[url('/DashboardBg.png')] bg-no-repeat bg-cover">
      <div className="w-full h-full grid grid-cols-[1fr,2fr] gap-4">
        {/* left side */}
        <aside className="w-full h-full flex flex-col items-center justify-start gap-6">
          <WalletCard />
          <SecurityCard />
        </aside>
      </div>
    </div>
  );
};

export default MainPage;
