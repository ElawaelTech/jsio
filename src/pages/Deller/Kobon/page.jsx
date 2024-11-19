import { Outlet, Link, router, useParams } from "react-router-dom";
import LoginCheck from "../../LoginCheck/page";
import Cookies from "js-cookie";
export default function DellerKobon(order) {
  const userinfo = JSON.parse(Cookies.get("userinfo"));
  const Username = userinfo[0].Name;
  const params = useParams();
  const style = {
    fontSize: "14px",
    color: "#666",
    fontWeight: "bold",
  };

  const Kobons = [
    {
      name: "كويون خصم",
      expir: "2024-11-03",
      type: "الخصم",
      descount: 100,
      top: 30,
      descountTo: "خصم على قيمة التوصبل",
      info1: "لجميع الطلبات",
      cod: "RFGFHHO154",
    },
    {
      name: "كويون خصم",
      expir: "2024-11-08",
      type: "الخصم",
      descount: 70,
      top: 20,
      descountTo: "خصم على قيمة التوصبل",
      info1: "لجميع الطلبات",
      cod: "UIHGO1YUG",
    },
    {
      name: "كويون خصم",
      expir: "2024-11-10",
      type: "الخصم",
      descount: 100,
      top: 20,
      descountTo: "خصم على قيمة التوصبل",
      info1: "لجميع الطلبات",
      cod: "GHGHO1YUY",
    },
  ];

  return (
    <>
      <LoginCheck />
      <div
        dir="rtl"
        className="row mt-0 text-center0 m-auto "
        style={{ maxWidth: "500px" }}
      >
        <div className="col-1 py-1 bg-blue2 ">
          <Link to="../Deller/Account">
            <i class="fa-solid fa-chevron-right  text-white mt-2 fs-4"></i>
          </Link>
        </div>
        <div className="col-11 py-1 text-center bg-blue2 text-white">
          <h4>{"  الكوبونات "}</h4>
        </div>
        <br />

        <div className="col-master col-card-alert col-12 mb-4 pt-3">
          <img src="../../../Images/addKobon.jpg" width={"150px"} alt="kobon" />
          {Kobons.map((x, index) => {
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
                            {"%" + x.descount}
                          </h1>
                          <h6>{x.name}</h6>
                          <h6>{"صالح للاستخدام حتى"}</h6>
                          <h6>{x.expir}</h6>
                          <hr />
                          <h1>{x.type}</h1>
                        </div>
                      </div>
                      <div className="col-6 text-center p-0">
                        <div className="cobon text-center w-100 h-100 bg-blue2 text-white0 p-1 pb-2">
                          <h1 style={{ fontSize: "3.5em", color: "#fff" }}>
                            {"%" + x.descount}
                          </h1>
                          <h6>{x.descountTo}</h6>
                          <h6>{`بحد اقصى ${x.top} جنية`}</h6>
                          <h6>{x.info1}</h6>
                          <hr />
                          <h4>{x.cod}</h4>
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
