import { useState, useEffect } from "react";
import { Outlet, Link, router, useParams, useNavigate } from "react-router-dom";
import Chat from "../../compoenents/Chat";
import Cookies from "js-cookie";
import LoginCheck from "../../LoginCheck/page";
import { AppValues, API, ApiUrl } from "../../Values";
export default function CustomerAdressSaved(order) {
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
        Action: "address",
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
        className="row mt-0 pt-2 text-center0 m-auto "
        style={{ maxWidth: "500px" }}
      >
        <div className="col-1 py-1 bg-info0 ">
          <Link to="../Customer/Account">
            <i className="fa-solid fa-chevron-right  text-dark0 mt-2 fs-4"></i>
          </Link>
        </div>
        <div className="col-11 py-1 text-center bg-info0 text-white0">
          <h4>{"  العناوين المحفوظة "}</h4>
        </div>
        <hr />
        <div className="col-12 pt-1 px-1 text-center mb-4">
          <Link to="../Customer/AdressAdd">
            <label
              dir="ltr"
              className="fs-3 fw-bold btn-green p-1 w-100 shadow"
            >
              اضافة عنوان <i className="fa-solid fa-plus"></i>
            </label>
          </Link>
        </div>

        {Data.map((x, index) => {
          return (
            <>
              <div className="col-12 mt-0">
                <div className="text-center0 w-100 m-1 bg-light p-1 shadow">
                  <div className="row">
                    <div className="col-1 text-center">
                      <i className="fa fa-solid fa-home mt-4"></i>
                    </div>
                    <div className="col-9 pe-2">
                      <h6 key={index + "c"} className="text-orange">
                        {x.Address}
                      </h6>
                      <h6 key={index + "d"} className="text-secondary">
                        {x.Title}
                      </h6>
                      <i className="text-green fa-solid fa-camera"></i>
                    </div>
                    <div className="col-1">
                      <Link
                        key={index + "e"}
                        to={`../Customer/AdressEdite/${x.Address}`}
                      >
                        <i className="text-green  fa-solid fa-pen mt-4"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
}
