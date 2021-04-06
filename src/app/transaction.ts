type transactionType = 'income' | 'outcome' | 'loan' | 'investment';
export interface Transaction {
  _id: string;
  amount: number;
  type: transactionType;
  name: {
    // Nested object with it’s own properties
    first: string;
    last: string;
  };
  company: string;
  email: string;
  phone: string;
  address: string;
}
