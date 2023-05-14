type props = { [key: string]: string };
type formCard = {
  title: string;
  bthDate: string;
  country: string;
  img: string;
  allow: boolean;
  sex: string;
};
type state = {
  cardsArray: formCard[];
};
export type { props, state, formCard };
