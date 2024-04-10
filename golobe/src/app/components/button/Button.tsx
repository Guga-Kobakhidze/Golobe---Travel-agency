"use client";

import React from "react";
import Button from "@mui/material/Button";
import { useRouter } from "next/navigation";

type ButtonVariant = "text" | "outlined" | "contained";

interface ButtonProps {
  variant: ButtonVariant;
  content: string;
  bgColor?: string;
  color?: string;
  href?: string;
}

const AnyBtn: React.FC<ButtonProps> = ({
  variant,
  content,
  bgColor,
  color,
  href,
}) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/${href}`);
  };

  return (
    <Button
      onClick={handleClick}
      variant={variant}
      sx={{
        bgcolor: bgColor,
        color: color ? color : "white",
        "&:hover": {
          backgroundColor: bgColor,
          opacity: 0.9,
        },
      }}
    >
      {content}
    </Button>
  );
};

export default AnyBtn;
