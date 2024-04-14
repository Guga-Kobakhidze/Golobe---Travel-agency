// Button Types

type ButtonVariant = "text" | "outlined" | "contained";

export interface ButtonProps {
  variant: ButtonVariant;
  content: string;
  bgColor: string;
  color: string;
  href?: string;
  btnFunc?: () => void;
}

export interface BtnToggleProps {
  variant: ButtonVariant;
  content: string;
  toggle: () => void;
  bgColor?: string;
  color?: string;
}

// Nav Props

export interface NavProps {
  color: string;
  flight?: boolean;
  stays?: boolean;
  navigation?: boolean;
  flyClick?: () => void;
  stayClick?: () => void;
}

// Context Props

export interface MainContextType {
  scroller: boolean;
  setScroller: React.Dispatch<React.SetStateAction<boolean>>;
}

// Form Interfaces

interface FromToData {
  from?: string;
  to?: string;
}

interface PassData {
  passenger?: string;
  class?: string;
  room?: string;
  guest?: string;
}

export interface SearchFormProps {
  path?: string;
  locationData: FromToData[];
  passData: PassData[];
}

interface TripCardsData {
  img: string;
  title: string;
  flight: string;
  hotel: string;
  resort: string;
}

export interface TripCardsProps {
  cardsList: TripCardsData[];
}

export interface SearchState {
  title: string;
  location: string;
  date: string;
  person: string;
  return: string;
  promoCode: string;
}

// PromoCode interface

export interface PromoCodeProps {
  currentRef: React.RefObject<HTMLInputElement>;
}

// Subtitle interface

export interface SubtitleProps {
  title: string;
  paragraph: string;
  btnContent: string;
}
