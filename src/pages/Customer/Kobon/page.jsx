import { useState, useEffect } from "react";
import { Outlet, Link, router, useParams, useNavigate } from "react-router-dom";
import Chat from "../../compoenents/Chat";
import Cookies from "js-cookie";
import LoginCheck from "../../LoginCheck/page";
import { AppValues, API, ApiUrl } from "../../Values";
export default function CustomerKobon(order) {
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
        Action: "kobbons",
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
        <div className="col-1 py-1 bg-blue2 ">
          <Link to="../Customer/Account">
            <i class="fa-solid fa-chevron-right  text-white mt-2 fs-4"></i>
          </Link>
        </div>
        <div className="col-11 py-1 text-center bg-blue2 text-white">
          <h4>{"  الكوبونات "}</h4>
        </div>
        <br />

        <div className="col-master col-card-alert col-12 mb-4 pt-3">
          <img src="../../../Images/addKobon.jpg" width={"150px"} alt="kobon" />
          {Data.map((x, index) => {
            return (
              <>
                <div className="card shadow m-2 mt-3">
                  <div className="card-body bg-light p-0">
                    <div className="row m-0 p-0">
                      <div className="col-6 text-center p-0">
                        <div className="cobon text-center w-100 h-100 bg-info0 p-1 pt-2">
                          <h1
                            style={{ fontSize: "3.5em" }}
                            className="text-green fw-bold"
                          >
                            {"%" + x.Descount}
                          </h1>
                          <h6>{x.KobonName}</h6>
                          <h6>{"صالح للاستخدام حتى"}</h6>
                          <h6>{x.Expir}</h6>
                          <hr />
                          <h3>{x.Type}</h3>
                        </div>
                      </div>
                      <div className="col-6 text-center p-0">
                        <div className="cobon text-center w-100 h-100 bg-blue2 text-white0 p-1 pb-2">
                          <h1 style={{ fontSize: "3.5em", color: "#fff" }}>
                            {"%" + x.Descount}
                          </h1>
                          <h6>{x.descountTo}</h6>
                          <h6>{`بحد اقصى ${x.Top} جنية`}</h6>
                          <h6>{x.Info}</h6>
                          <hr />
                          <h3>{x.Cod}</h3>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}
