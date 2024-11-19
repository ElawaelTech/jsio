import CardAlert from "../compoenents/CardAlert";
export default function Alert() {
  const Alerts = [
    { msg: "ناصر", time: "2 ساعه" },
    { msg: "كريم", time: "3 ساعه" },
    { msg: "طارق", time: "1 ساعه" },
    { msg: "ناصر", time: "2 ساعه" },
    { msg: "كريم", time: "3 ساعه" },
    { msg: "طارق", time: "1 ساعه" },
    { msg: "ناصر", time: "2 ساعه" },
    { msg: "كريم", time: "3 ساعه" },
    { msg: "طارق", time: "1 ساعه" },
    { msg: "عمر", time: "5 ساعه" },
  ];

  console.log(Alert);
  return (
    <>
      <div className="row m-auto" style={{ maxWidth: "500px" }}>
        <div className="col-12 p-1">
          <h4>التنبيهات</h4>
        </div>
        <div className="col-master col-card-alert col-12">
          {Alerts.map((x, index) => {
            return <CardAlert key={index} msg={x.msg} time={x.time} />;
          })}

          <br />
          <br />
        </div>
      </div>
    </>
  );
}
