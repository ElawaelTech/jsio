import { Outlet, Link } from "react-router-dom";

export default function CardOrders({ TypeOrder, date, number, statue }) {
  let classStatu = "";

  if (statue == "جارى التاكيد") {
    classStatu = "btn-primary";
  }
  if (statue == "ملغى") {
    classStatu = "btn-danger";
  }
  if (statue == "جارى التنفيذ") {
    classStatu = "btn-orange";
  }
  if (statue == "جارى التوصيل") {
    classStatu = "btn-syan";
  }
  if (statue == "تم التوصيل") {
    classStatu = "btn-green";
  }
  return (
    <>
      <div className=" card-content card" style={{ maxWidth: "500px" }}>
        <div className="card-body p-0">
          <div className="row">
            <div className="col-1 text-center p-1">
              <img
                style={{ width: "40px" }}
                src="../../../Images/gps.png"
                alt={TypeOrder}
              />
            </div>
            <div className="col-10">
              <h6
                style={{ fontSize: "1.1em", color: "#000", fontWeight: "bold" }}
              >
                {TypeOrder}
              </h6>
              <small>{"#" + number} </small>
            </div>

            <div className="col-4">
              <h6
                style={{
                  fontSize: "11px",
                  color: "#000",
                  fontWeight: "bold",
                  color: "#00C1BC",
                }}
              >
                {date}
              </h6>
            </div>
            <div className="col-8 text-center">
              <Link to={`../Deller/OrderInfo/${number}`}>
                <button
                  style={{ width: "100px" }}
                  className={"btn btn-sm p-0 fw-bold " + classStatu}
                >
                  {statue}
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
