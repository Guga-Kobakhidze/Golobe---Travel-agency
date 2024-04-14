"use client";

import React from "react";
import Button from "@mui/material/Button";
import { useRouter } from "next/navigation";
import { ButtonProps } from "@/app/interfaces/Interfaces";

const BtnComponent: React.FC<ButtonProps> = ({
  variant,
  content,
  bgColor,
  color,
  href,
  btnFunc,
}) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/${href}`);
  };

  return (
    <Button
      type={!href ? "submit" : "button"}
      onClick={href ? handleClick : btnFunc}
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

export default BtnComponent;
