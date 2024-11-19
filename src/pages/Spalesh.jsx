import { Outlet, Link, useNavigate, useParams } from "react-router-dom";
import { AppValues } from "./Values";
//============== التحويل بين الصفحات بعد الحفظ
import { ReactNode, use, useCallback, useEffect, useState } from "react";
export default function Spalesh() {
  const navigate = useNavigate();
  const [isMounted, setisMounted] = useState(false);
  useEffect(() => {
    setTimeout(() => setisMounted(true), 2000);
    if (isMounted == true) {
      navigate("./Login");
    }
  }, [isMounted]);

  return (
    <>
      <div
        className="row text-center m-0 p-0"
        style={{ width: "100vw", height: "100vh", background: "#52C856" }}
      >
        <img className="welcomScreenImg" src="./welecome.jpg" alt="welecome" />
      </div>
    </>
  );
}
