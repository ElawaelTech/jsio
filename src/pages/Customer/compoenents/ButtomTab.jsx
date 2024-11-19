"use client";
import { useState } from "react";
import { setegid } from "process";

export default function ButtomTab() {
  const [Page, SetPage] = useState("b");
  const [Class_, SetClass_] = useState({
    b: "text-green",
    c: "",
    d: "",
    e: "",
  });
  return (
    <>
      <div className="ButtomTab ">
        <ul>
          <li>
            <i
              id="b"
              onClick={Tab_}
              className={"fa fa-cart-arrow-down m-0 p-0 " + Class_.b}
            >
              <h6>المتجر</h6>
            </i>
          </li>
          <li>
            <i
              id="c"
              onClick={Tab_}
              className={"fas fa-industry m-0 p-0 " + Class_.c}
            >
              <h6>الطلبات</h6>
            </i>
          </li>
          <li>
            <i
              id="d"
              onClick={Tab_}
              className={"fa fa-shekel-sign m-0 p-0  " + Class_.d}
            >
              <h6>التنبيهات</h6>
            </i>
          </li>
          <li>
            <i
              id="e"
              onClick={Tab_}
              className={"fas fa-address-card m-0 p-0 " + Class_.e}
            >
              <h6>صفحتى</h6>
            </i>
          </li>
        </ul>
      </div>
    </>
  );
  function Tab_(e) {
    SetClass_({
      b: "",
      c: "",
      d: "",
      e: "",
    });
    const id = e.target.id;

    SetClass_((values) => ({ ...values, [id]: "text-green" }));
    SetPage(id);
  }
}
