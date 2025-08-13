import Layout from "../components/Layout";

export default function Investors() {
  const investors = [
    { name: "John Doe", scheme: "Equity" },
    { name: "Jane Smith", scheme: "Debt" }
  ];
  return (
    <Layout>
      <h1 className="text-2xl font-bold mb-4 ">Investors</h1>
      <ul>
        {investors.map((inv, idx) => (
          <li key={idx} className="p-2 border-b">
            {inv.name} - {inv.scheme}
          </li>
        ))}
      </ul>
    </Layout>
  );
}
