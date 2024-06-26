"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { ButtonProps } from "@/app/interfaces/Interfaces";
import { Button } from "@mui/material";

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
      type={href ? "button" : "submit"}
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
