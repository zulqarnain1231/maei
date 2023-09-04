import React from "react";
import HistoryCard from "./HistoryCard";
import DepositHistory from "./DepositHistory";

const Transactions = () => {
  return (
    <div className="w-full h-full  bg-[url('/Dashboard2Bg.png')] bg-no-repeat bg-cover bg-bottom md:px-10 px-4 py-1">
      <div className="w-full h-full grid xl:grid-cols-[1fr,3fr] gap-6 pb-3">
        <HistoryCard />
        <DepositHistory />
      </div>
    </div>
  );
};

export default Transactions;
