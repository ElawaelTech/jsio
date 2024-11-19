import { useState, useEffect } from "react";
import { Outlet, Link, router, useParams, useNavigate } from "react-router-dom";
import Chat from "../../compoenents/Chat";
import Cookies from "js-cookie";
import LoginCheck from "../../LoginCheck/page";
import CardOrders from "../compoenents/CardOrders";
import { AppValues, API, ApiUrl } from "../../Values";

export default function CustomerNotes() {
  const [Data, SetData] = useState([]);
  const userinfo = JSON.parse(Cookies.get("userinfo"));
  const Username = userinfo[0].Name;
  const UserID = userinfo[0].ID;
  const params = useParams();
  const style = {
    fontSize: "14px",
    color: "#666",
    fontWeight: "bold",
  };

  useEffect(() => {
    GetData();
  }, []);
  async function GetData() {
    try {
      const post = {
        Name: Username,
        ID: UserID,
        statue: "",
        Action: "notes",
      };
      const respons = await fetch(`${ApiUrl}/Customer/CalculateData.php`, {
        method: "POST",
        body: JSON.stringify(post),
      });
      const body = await respons.json();
      console.log(body);
      SetData(body);
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
          <Link to="../Customer/Account">
            <i className="fa-solid fa-chevron-right  mt-2 fs-4"></i>
          </Link>
        </div>
        <div className="col-11 py-1 text-center bg-light">
          <h4>{"  ملاحظات المستخدمين "}</h4>
        </div>
        <br />

        <div className="col-master col-12 mt-0 pt-4">
          {Data.length > 0 ? <CardItem /> : null}
          {Data.length < 1 ? <NoNotes /> : null}
        </div>
      </div>
    </>
  );

  function CardItem() {
    return Data.map((x, index) => {
      return (
        <>
          <div className="card shadow mt-2 bg-light">
            <div className="card-body">
              <h6 className="text-secondary" key={index}>
                {x.Description}
              </h6>
              <small className="text-green" key={index}>
                {x.Date}
              </small>
            </div>
          </div>
        </>
      );
    });
  }
}

function NoNotes() {
  return (
    <div className="card m-0">
      <div className="card-body text-center " style={{ height: "650px" }}>
        <br /> <br /> <br />
        <br />
        <i
          style={{ fontSize: "100px" }}
          className="fa-solid fa-comment-slash m-4 p-4 text-secondary"
        ></i>
        <h4>لا يوجد هناك تعليقات</h4>
        <br /> <br /> <br />
      </div>
    </div>
  );
}
