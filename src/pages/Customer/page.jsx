"use client";
import { useState } from "react";
import { AppValues } from "../Values";
// import { redirect, useRouter } from "next/navigation";
// import Link from "next/link";
import { Outlet, Link,useNavigate } from "react-router-dom";
export default function CustomerMain() {
  const navigate = useNavigate();
  const [Page, SetPage] = useState("a");

  return (
    <>

      {Page == "a" ? navigate("./Customer/StartPage") : null}
      {Page == "b" ? navigate("./Customer/Shopping") : null}

    </>
  );
}
