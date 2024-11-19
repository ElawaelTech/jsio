import { Outlet, Link, router, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { AppValues, API } from "../../Values";
import axios from "axios";
import Cookies from "js-cookie";
import Chat from "../../compoenents/Chat";
import LoginCheck from "../../LoginCheck/page";
export default function CustomerHistoryShkawa() {
  const userinfo = JSON.parse(Cookies.get("userinfo"));
  const Username = userinfo[0].Name;
  const UserId = userinfo[0].ID;
  const [Shkawa, SetShkawa] = useState([]);
  useEffect(() => {
    GetShkawa();
  }, []);
  //-------------------------------------------------------------
  async function GetShkawa() {
    try {
      const post = {
        Name: Username,
        name_id: UserId,
        statue: "نشطة",
        Action: "Shkawa",
      };
      const result = await fetch(API.Orders, {
        method: "POST",
        body: JSON.stringify(post),
      });
      const body = await result.json();
      console.log(body);
      SetShkawa(body);
    } catch (error) {
      return error;
    }
  }

  return (
    <>
      <LoginCheck />
      <div
        dir="rtl"
        className="row mt-0 text-center0 m-auto "
        style={{ maxWidth: "500px" }}
      >
        <div className="col-1 py-1 bg-light ">
          <Link to="../Customer/Support">
            <i class="fa-solid fa-chevron-right  mt-2 fs-4"></i>
          </Link>
        </div>
        <div className="col-11 py-1 text-center bg-light">
          <h4>{"  سجل الشكاوى "}</h4>
        </div>
        <br />

        <div className="col-master col-12 mt-4 mb-4 pt-0">
          {Shkawa.length > 0 ? <CardShkawa /> : null}
          {Shkawa.length < 1 ? <NoShkawa /> : null}
        </div>
      </div>
    </>
  );

  function CardShkawa() {
    return Shkawa.map((x, index) => {
      return (
        <>
          <div key={index} className="card bg-light mb-3 shadow">
            <div className="card-body p-0"></div>
            <div className="row p-1 mb-2">
              <div className="col-8">
                <img
                  style={{ width: "30px" }}
                  src="../../../Images/gps.png"
                  alt=""
                />
                <span className="mx-2 fw-bold">{x.type_order}</span>
                <br />
                <small className="mx-2  pe-4">{`رقم الطلب : ${x.id}`}</small>
                <br />
                <small className="mx-2  pe-0">{` نوع الشكوى : ${x.type_shakwa}`}</small>
                <br />
                <small className="mx-2  pe-0 text-green">{x.description}</small>
              </div>
              <div className="col-4 text-center">
                <small className="">{`#${x.order_number}`}</small>
                <br />
                <small className="">{`${x.shakwa_date}`}</small>
                <br />
                {x.statue == "نشطة" ? (
                  <small className="fw-bold px-2 bg-green">{x.statue}</small>
                ) : null}
                {x.statue == "ملغى" ? (
                  <small className="fw-bold px-2 bg-danger text-white">
                    {x.statue}
                  </small>
                ) : null}
                {x.statue == "مغلق" ? (
                  <small className="fw-bold px-2 bg-primary text-white">
                    {x.statue}
                  </small>
                ) : null}

                <br />
              </div>
            </div>
          </div>
        </>
      );
    });
  }
}

function NoShkawa() {
  return (
    <div className="card m-0 bg-light">
      <div className="card-body text-center ">
        <i
          style={{ fontSize: "50px" }}
          className="fa-solid fa-circle-check m-2 p-1 text-secondary"
        ></i>
        <h6> رائع ليس لديك اى شكاوى نشطة </h6>
      </div>
    </div>
  );
}
