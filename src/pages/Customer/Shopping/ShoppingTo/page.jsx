import { Visa } from "../../../Forms/payMent/visa";
import Chat from "../../../compoenents/Chat";
import { Outlet, Link, router, useParams } from "react-router-dom";
import Cookies from "js-cookie";
export default function CustomerShoppingTo(Search) {
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
          <span className="fs-6 fw-bold"> موقع تسليم الشحنة </span>
          <Link to="../Customer/Shopping/AnyShing" className="float-start">
            <i class="fa-solid fa-xmark  fs-4 "></i>
          </Link>
        </div>
        <div className="col-12 p-2 div-mapTo bg-light mb-2"></div>
        <div className="col-12 px-2 bg-greenLight text-end p-3">
          <i class="fa-solid fa-location-dot text-green  mx-2"></i>
          <span>{"القشيرى"}</span>
        </div>
        <div className="col-12 my-4 p-1 text-end">
          <h6>تفاصيل اضافية</h6>
          <input
            type="text"
            name=""
            className="form-control"
            placeholder="رقم المنزل / العمارة / الشقة (اختيارى)"
          />
          <div dir="ltr" className="mt-3">
            <label htmlFor="Saveplase" className="text-secondary mt-0">
              {"حفظ المكان لاستخدامة لاحقا  "}
            </label>

            <input
              id="Saveplase"
              type="checkbox"
              name="Saveplase"
              className="mx-2"
              // checked={inputs.active}
              // onChange={(e) => {
              //  setinputs({ ...inputs, active: event.target.checked });
              // }}

              // onChange={handleChange}
            />
          </div>

          <Link
            to="../Customer/Shopping/AnyShing"
            className="btn btn-green w-100 fw-bold p-2 mt-3"
          >
            موقع تسليم الشحنة
          </Link>
        </div>
      </div>
    </>
  );
}
