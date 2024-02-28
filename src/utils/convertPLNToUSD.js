export const convertPLNToUSD = (PLN) => {

  const PLNtoUSD = PLN / 3.5;
  console.log(PLNtoUSD);
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  });
  if (typeof PLN === 'string' || PLN === undefined) {
  return NaN;
  } if (PLN === null || typeof PLN === 'object' || typeof PLN === 'function' || Array.isArray(PLN) ){
  return 'Error';
  } if (PLN < 0) {
  return '$0.00';
  } else {
    return formatter.format(PLNtoUSD).replace(/\u00a0/g, ' ');
  }
}