// Button Types

type ButtonVariant = "text" | "outlined" | "contained";

export interface ButtonProps {
  variant: ButtonVariant;
  content: string;
  bgColor?: string;
  color?: string;
  href?: string;
  btnFunc?: () => void;
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
  from: string;
  to: string;
}

interface PassData {
  passenger: string;
  class: string;
}

export interface SearchFormProps {
  path?: string;
  fromToData: FromToData[];
  passData: PassData[];
}

export interface SearchState {
  fromTo: string;
  date: string;
  passenger: string;
  trip: string;
  promoCode: string;
}

// PromoCode

export interface PromoCodeProps {
  currentRef: React.RefObject<HTMLInputElement>;
}
