export type Review = {
  company: {
    name: string;
    logoUrl: string;
    address: string;
  };
  review: {
    rate: number;
    comment: string;
  };
  user: {
    profileImgUrl: string;
    id: string;
  };
};
