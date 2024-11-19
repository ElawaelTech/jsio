export default function CardAlert({msg,time}) {
  return (
    <>
      <div className="card-content card" style={{ maxWidth: "500px" }}>
        <div className="card-body p-0">
          <div className="row">
            <div className="col-2 text-center">
              <i
                className="fa fa-user-tie"
                style={{ fontSize: "30px", borderRadius: "30px" }}
              ></i>
            </div>
            <div className="col-10">
              <span>{msg} </span><br />
              <small> {time}</small>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
