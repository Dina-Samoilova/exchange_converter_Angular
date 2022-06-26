export interface Convert {
  success: boolean;
  result: number;
  query: {
    from: string,
    to: string,
    amount: number,
  };
}
