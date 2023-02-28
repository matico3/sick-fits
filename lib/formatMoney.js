export default function formatMoney(amount = 0) {
  // Check if its rounded amount

  let MFD = 2;
  if (amount % 100 === 0) {
    MFD = 0;
  }

  const formatter = Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: MFD,
  });

  return formatter.format(amount / 100);
}
