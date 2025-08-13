export default function handler(req, res) {
  res.status(200).json({
    inflow: 120000,
    outflow: 85000,
    transactionCount: 150,
  });
}
