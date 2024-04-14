import React, { useRef, useState } from "react";
import { SearchState } from "../interfaces/Interfaces";

const useSearchForm = () => {
  const LocationRef = useRef<HTMLSelectElement | null>(null);
  const DateRef = useRef<HTMLInputElement | null>(null);
  const PersonRef = useRef<HTMLInputElement | null>(null);
  const ReturnRef = useRef<HTMLInputElement | null>(null);
  const PromoCodeRef = useRef<HTMLInputElement | null>(null);

  const [title, setTitle] = useState<string>("");
  const [showPromo, setShowPromo] = useState<boolean>(false);
  // const [filledForm, setFilledForm] = useState<SearchState>({
  //   title: "",
  //   location: "",
  //   date: "",
  //   person: "",
  //   return: "",
  //   promoCode: "",
  // });

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const filledForm = {
      title: title,
      location: LocationRef.current?.value || "",
      date: DateRef.current?.value || "",
      person: PersonRef.current?.value || "",
      return: ReturnRef.current?.value || "",
      promoCode: PromoCodeRef.current?.value || "",
    };

    console.log(filledForm);
  };

  const ShowPromo = () => {
    setShowPromo((prev) => !prev);
  };

  return {
    LocationRef,
    DateRef,
    PersonRef,
    ReturnRef,
    PromoCodeRef,
    showPromo,
    ShowPromo,
    // filledForm,
    setTitle,
    onSubmit,
  };
};

export default useSearchForm;
