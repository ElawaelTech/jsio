export default function CardOrders({
  name,
  time,
  number,
  items,
  countitems,
  cost,
}) {
  return (
    <>
      <div className=" card-content card" style={{ maxWidth: "500px" }}>
        <div className="card-body p-0">
          <div className="row">
            <div className="col-2">
              <i
                className="fa fa-user-tie mx-2"
                style={{ fontSize: "30px", borderRadius: "30px" }}
              ></i>
            </div>
            <div className="col-10">
              <h6
                style={{ fontSize: "1.2em", color: "#000", fontWeight: "bold" }}
              >
                {name}
              </h6>
              <small>{"#" + number} </small>
            </div>

            <div className="col-9">
              <h6
                style={{ fontSize: "1em", color: "#000", fontWeight: "bold" }}
              >
                تفاصيل الطلب
              </h6>
              {items.map((x, index) => {
                return (
                  <>
                    <h6
                      key={index}
                      style={{
                        fontSize: "14px",
                        color: "#666",
                        fontWeight: "bold",
                      }}
                    >
                      {x.count + " - " + x.item}{" "}
                    </h6>
                  </>
                );
              })}
            </div>
            <div className="col-3">
              <h6
                style={{
                  fontSize: "14px",
                  color: "#109DBD",
                  fontWeight: "bold",
                }}
              >
                {cost} جنيه
              </h6>

              <h6
                style={{
                  fontSize: "14px",
                  color: "#666",
                  fontWeight: "bold",
                }}
              >
                ({countitems} سلع)
              </h6>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
