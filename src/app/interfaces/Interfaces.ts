// Button Types

type ButtonVariant = "text" | "outlined" | "contained";

export interface ButtonProps {
  variant: ButtonVariant;
  content: string;
  bgColor?: string;
  color?: string;
  href?: string;
}

// Nav Props

export interface NavProps {
  color: string;
  flight?: boolean;
  stays?: boolean;
}

// Context Props

export interface MainContextType {
  scroller: boolean;
  setScroller: React.Dispatch<React.SetStateAction<boolean>>;
}
