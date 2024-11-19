export default function Main() {
  return (
    <>
      <div className="row-master row text-center m-auto p-1" style={{ maxWidth: "500px" }}>
        <div className="col-12 text-center">
          {/* <h1>MAIN</h1> */}
          <img
            src="logo.png"
            alt="logo"
            style={{ width: "200px", height: "100px" }}
          />
        </div>
        <div className="col-6 p-1 text-center">
          <div className="card p-0 m-0">
            <div className="card-body p-0 pb-3">
              <div className="div-image-home">
                <img src="images/image-1.jpeg" alt="" />
              </div>
              <h4>المتاجر</h4>
            </div>
          </div>
        </div>
        <div className="col-6 p-1 text-center">
          <div className="card p-0 m-0">
            <div className="card-body p-0 pb-3">
              <div className="div-image-home">
                <img src="images/image-2.jpeg" alt="" />
              </div>
              <h4>اطلب اى حاجه</h4>
            </div>
          </div>
        </div>
        <div className="col-6 p-1 text-center">
          <div className="card p-0 m-0">
            <div className="card-body p-0 pb-3">
              <div className="div-image-home">
                <img src="images/image-3.jpeg" alt="" />
              </div>
              <h4>المتاجر</h4>
            </div>
          </div>
        </div>
        <div className="col-6 p-1 text-center">
          <div className="card p-0 m-0">
            <div className="card-body p-0  pb-3">
              <div className="div-image-home">
                <img src="images/image-3.jpeg" alt="" />
              </div>
              <h4>المتاجر</h4>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
