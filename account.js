const accounts = [
    {
      name: 'Arun',
      accountNo: '001',
    },
    {
      name: 'Babu',
      accountNo: '002',
    },
    {
      name: 'Chandra',
      accountNo: '003',
    },
  ];
  const balances = {
    '001': 5000,
    '002': 2000,
    '003': 0,
  };
   
  const transactions = [
    {
      accountNo: '001',
      type: 'withdrawal',
      amount: 1000,
    },
    {
      accountNo: '001',
      type: 'deposit',
      amount: 500,
    },
    {
      accountNo: '001',
      type: 'withdrawal',
      amount: 1000,
    },
    {
      accountNo: '002',
      type: 'deposit',
      amount: 300,
    },
    {
      accountNo: '002',
      type: 'withdrawal',
      amount: 200,
    },
    {
      accountNo: '003',
      type: 'deposit',
      amount: 200,
  },
  ];
 

 const getBalances = () => accounts.map((account) => ({
    ...account,
    Balance:balances[account.accountNo]
 }));

 const updateBalances = () => transactions.map((transaction) => transaction.type === "withdrawal" 
 ? balances[transaction.accountNo]-=transaction.amount 
 : balances[transaction.accountNo]+=transaction.amount);
 
 const main =  () => {
  console.log("Balance before transaction");
  console.table(getBalances());
  updateBalances();
  console.log("Balance after transaction");
  console.table(getBalances());
 };

 main();

 