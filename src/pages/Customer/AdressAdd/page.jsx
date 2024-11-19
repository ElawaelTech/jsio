import { Outlet, Link, router, useParams } from "react-router-dom";
import Cookies from "js-cookie";
export default function CustomerAdressAdd(Search) {
  const userinfo = JSON.parse(Cookies.get("userinfo"));
  const Username = userinfo[0].Name;
  const Alerts = [
    {
      name: "ناصر",
      time: "2 ساعه",
      number: "54461",
      cost: "54",
      countitems: "2",
      items: [
        {
          item: "سماعه",
          count: "1",
        },
        {
          item: "شاشاه",
          count: "1",
        },
      ],
    },
  ];
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
        <div className="col-1 py-1 bg-light ">
          <Link to="../Customer/AdressSaved">
            <i className="fa-solid fa-chevron-right  mt-2 fs-4"></i>
          </Link>
        </div>
        <div className="col-11 py-1 text-center bg-light">
          <h4>{"  اضافة عنوان "}</h4>
        </div>
        <div className="col-12 p-2 div-mapAddAddress bg-light mb-2"></div>
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

          <Link
            to="../Customer/AdressSaved"
            className="btn btn-green w-100 fw-bold p-2 mt-3"
          >
            اضافة العنوان
          </Link>
        </div>
      </div>
    </>
  );
}
