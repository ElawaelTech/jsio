"use client";
import { useState } from "react";
import { AppValues } from "../Values";
import { Outlet, Link } from "react-router-dom";
import LoginCheck from "../../LoginCheck/page";
export default function DellerSupport() {
  const router = useRouter();
  const [Page, SetPage] = useState("b");

  return (
    <>
    <LoginCheck/>
      {Page == "a" ? router.push("./Deller/StartPage") : null}
      {Page == "b" ? router.push("./Deller/Shopping") : null}

    </>
  );
}
