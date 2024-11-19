export default function Account() {
  return (
    <>
      <div className="card  m-auto p-0" style={{ maxWidth: "500px" }}>
        <div className="card-header m-0">
          <div className="row p-0 m-0">
            <div className="col-2 text-center p-0">
              <i
                className="fa fa-user-tie bg-light text-secondary p-4"
                style={{ fontSize: "50px", borderRadius: "50px" }}
              ></i>
            </div>
            <div className="col-10">
              <h5>nasser tawfik</h5>
              <i className="fa fa-star text-warning"></i>
              <i className="fa fa-star text-warning"></i>
              <i className="fa fa-star text-warning"></i>
              <i className="fa fa-star text-warning"></i>
              <i className="fa fa-star text-warning"></i>
              <br />
              <span className="text-green">
                <i className="fa fa-star">اظهار هوية المندوب</i>
              </span>
            </div>
            <div className="col-6 text-center">
              <small>الطلبات الموصلة</small>
              <h6>5454 طلب</h6>
            </div>
            <div className="col-6 text-center">
              <small> اجمالى الايرادات</small>
              <h6>454542312 جنيه</h6>
            </div>
          </div>
        </div>
        <div className="card-body p-0">
          <ul className="ul-setting m-2 p-1">
            <li > <i className="fa fa-chart-pie ms-2"></i>  استلام الطلب</li>
            <li > <i className="fa fa-dollar-sign ms-2"></i>  رصيد الحساب</li>
            <li > <i className="fab fa-cc-amazon-pay ms-2"></i>   ارباحى</li>
            <li > <i className="fa fa-user-tie ms-2"></i>  وضع المستخدم</li>
            <li > <i className="fa fa-shekel-sign ms-2"></i>  ملاحظات المستخدمين</li>
            <li > <i className="fa fa-industry ms-2"></i>  الكوبونات</li>
            <li > <i className="fa fa-star ms-2"></i>  دعم المناديب</li>
            <li > <i className="fa fa-tools ms-2"></i>  اعدادات</li>
            <li > <i className="fa-solid fa-right-from-bracket text-danger ms-2"></i>  تسجيل الخروج</li>
          </ul>
        </div>
      </div>
    </>
  );
}
