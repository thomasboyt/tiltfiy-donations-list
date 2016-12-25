export interface Donation {
  id: number;
  name: string;
  comment: string | null;
  created: string;
  amount: number;
}

export interface Campaign {
  total_raised: number;
  goal: number;
  donations: Donation[];
}
