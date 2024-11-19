import Cookies from "js-cookie";
import { useState, useEffect } from "react";
import { Outlet, Link, router, useParams, useNavigate } from "react-router-dom";
export default function LoginCheck() {
  const navigate = useNavigate();
  function Logincheck() {
    const userinfo = Cookies.get("userinfo");
    if (!userinfo) {
      return navigate("../Login");
    }
  }
  useEffect(() => {
    Logincheck();
  }, []);
}
