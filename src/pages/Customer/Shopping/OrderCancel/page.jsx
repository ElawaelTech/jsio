import { Outlet, Link, useNavigate, router, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { AppValues, API } from "../../../Values";
import axios from "axios";
import Cookies from "js-cookie";
import Chat from "../../../compoenents/Chat";
import LoginCheck from "../../../LoginCheck/page";
export default function CustomerOrderCancel() {
  const navigate = useNavigate();
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
        className="row mt-0 text-center0 m-auto bg-light"
        style={{ maxWidth: "500px" }}
      >
        <div className="col-1 py-1 bg-light ">
          <i
            onClick={() => navigate(-1)}
            class="fa-solid fa-chevron-right  mt-2 fs-4"
          ></i>
        </div>
        <div className="col-9 py-1 text-center bg-light">
          <img
            src="../../../../Images/gps.png"
            alt=""
            style={{ width: "15px" }}
          />
          <spam class="fw-bold fs-5">{" اطلب اى حاجة "}</spam>
        </div>
        <div className="col-2  py-1 text-center bg-light">
          <button className="btn btn-sm btn-warning m-1 p-0 px-1">
            {"المساعدة"}
          </button>
        </div>


        <div className="col-master col-12 mt-3 mb-4 p-3">
          <div className="card shadow">
            <div className="card-body text-secondary text-center">
              <h4> طلب ملغى </h4>
              <i
                class="fa-solid fa-xmark mt-4"
                style={{ fontSize: "70px" }}
              ></i>
              <br />
              <span>
                ناسف . لقد تم الغاء الطلب بسبب عدم توفر مندوبين فى الوقت الحالى
                . يمكنك المحاولة مرة اخرى فى وقت لاحق
              </span>
            </div>
          </div>

          <div className="card shadow mt-2">
            <div className="card-body text-secondary text-center">
              <h6>تفاصيل الطلب {"3454545"}#</h6>
              <small>{"Hg tduyd yr c y rwtydrtydwghfws"}</small>
              <br />
              <button className="btn btn-warning fw-bold mt-4 w-50">
                <i class=" mx-2 fa-solid fa-rotate-left"></i>
                اعادة الطلب
              </button>
            </div>
          </div>
        </div>
      </div>
      <Chat />
    </>
  );

  function CardShkawa() {
    return Shkawa.map((x, index) => {
      return (
        <>
          <div className="card bg-light mb-3 shadow">
            <div className="card-body p-0"></div>
            <div className="row p-1 mb-2">
              <div className="col-8">
                <img
                  style={{ width: "30px" }}
                  src="../../../Images/gps.png"
                  alt=""
                />
                <span className="mx-2 fw-bold">{x.TypeOrder}</span>
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
