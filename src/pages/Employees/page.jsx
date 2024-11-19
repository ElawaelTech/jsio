"use client";
import { useState } from "react";
import { AppValues } from "../Values";
import { setegid } from "process";
import Account from "./page/account";
import Alert from "./page/alerts";
import Main from "./page/Main";
import MyOrders from "./page/myOrders";
import { Visa } from "../Forms/payMent/visa";
export default function MainContainer() {
  const [Page, SetPage] = useState("a");
  const [Class_, SetClass_] = useState({
    a: "text-green",
    b: "",
    c: "",
    d: "",
  });


  return (
    <>
      {Page == "a" ? <Main /> : null}
      {Page == "b" ? <MyOrders /> : null}
      {Page == "c" ? <Alert /> : null}
      {Page == "d" ? <Account /> : null}
      <div className="ButtomTab ">
        <ul>
          <li>
            <i id="a" onClick={Tab_} className={"fa fa-cart-arrow-down m-0 " + Class_.a}>
              <h6>الرئيسية</h6>

            </i>
          </li>
          <li>
            <i id="b" onClick={Tab_} className={"fas fa-industry m-0 " + Class_.b}>
              <h6>الطلبات</h6>
            </i>
          </li>
          <li>
            <i id="c" onClick={Tab_} className={"fa fa-shekel-sign m-0 " + Class_.c} >
              <h6>التنبيهات</h6>
            </i>
          </li>
          <li>
            <i  id="d" onClick={Tab_} className={"fas fa-address-card m-0 " + Class_.d}>
              <h6>صفحتى</h6>
            </i>
          </li>
        </ul>
      </div>
    </>
  );
  function Tab_(e) {
    SetClass_({
      a: "",
      b: "",
      c: "",
      d: "",
    });
    const id = e.target.id;
    SetPage(id);
    SetClass_((values) => ({ ...values, [id]: "text-green" }));
  }
}
