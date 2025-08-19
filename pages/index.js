import { useState } from "react";
import Layout from "../components/Layout";
import TransactionSnapshot from "../components/TransactionSnapshot";
import Todos from "../components/Todos";
import AssetsChart from "../components/AssetsChart";
import MarketOverview from "../components/MarketOverview";
import LeadsOverview from "../components/LeadsOverview";
import toast, { Toaster } from "react-hot-toast";


// ✅ Directly import JSON instead of fetching localhost
import transactionsData from "../public/data/transactions.json";
import DownloadPdfButton from "@/components/DownloadPdfButton";

export default function Home({ data }) {
  const [todos, setTodos] = useState(data.todos);

  const handleWish = () => toast.success("Wish granted!");
  const handleRemind = (id) =>
    setTodos((prev) =>
      prev.map((t) => (t.id === id ? { ...t, reminded: true } : t))
    );

  return (
    <Layout>
      <Toaster />
      <div className="p-6">
     <DownloadPdfButton> 
        <TransactionSnapshot {...data} />
        <Todos todos={todos} onWish={handleWish} onRemind={handleRemind} />
        <AssetsChart data={data.assets} />
        <MarketOverview market={data.market} />
       </DownloadPdfButton> 
      </div>

      {/* Full-width LeadsOverview below grid */}
      <div className="mt-4">
        <LeadsOverview data={data.leads} />
      </div>
    </Layout>
  );
}

// ✅ No more localhost fetch
export async function getStaticProps() {
  return { props: { data: transactionsData } };
}
