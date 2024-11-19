import { Visa } from "../../../Forms/payMent/visa";
import Chat from "../../../compoenents/Chat";
import { Outlet, Link, router, useParams } from "react-router-dom";
import Cookies from "js-cookie";
export default function CustomerShoppingFrom(Search) {
  const userinfo = JSON.parse(Cookies.get("userinfo"));
  const Username = userinfo[0].Name;
 
  const params = useParams();
  const imgstyle = {
    height: "100%",
  };

  return (
    <>
      <div
        className="p-1 row  text-center m-auto "
        style={{ maxWidth: "500px" }}
      >
        <div className="col-12 py-2 text-center bg-light mb-1">
          <span class="fw-bold fs-6">من اين تريد ان تطلب</span>
          <Link to="../Customer/Shopping/AnyShing" className="float-start">
            <i class="fa-solid fa-xmark  fs-4 "></i>
          </Link>
        </div>
        <div className="col-12 p-2 div-mapFrom bg-light mb-2"></div>
        <div className="col-12 px-2 bg-light text-end p-3">
          <i class="fa-solid fa-location-dot text-green  mx-2"></i>
          <span>{"القشيرى"}</span>
        </div>
        <div className="col-12 mt-2 p-0">
          <Link
            to="../Customer/Shopping/AnyShing"
            className="btn btn-green w-100 fw-bold p-2"
          >
            تاكيد الموقع
          </Link>
        </div>
      </div>
    </>
  );

  }