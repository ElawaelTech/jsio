import { Outlet, Link, router, useParams } from "react-router-dom";
export default function Khsosya(order) {
  const style = {
    fontSize: "14px",
    color: "#666",
    fontWeight: "bold",
  };

  return (
    <>
      <div
        dir="rtl"
        className="row mt-0 text-center0 m-auto "
        style={{ maxWidth: "500px" }}
      >
        <div className="col-1 py-1 bg-light ">
          <Link to="../Customer/Setting">
            <i class="fa-solid fa-chevron-right  mt-2 fs-4"></i>
          </Link>
        </div>
        <div className="col-11 py-1 text-center bg-light">
          <h4>{" الخصوصية "}</h4>
        </div>
        <br />

        <div className="col-12 mt-0">
          <h3>سياسة الخصوصية</h3>
          <b>
            نحن في مرسول، نلتزم بحماية خصوصيتك وضمان سرية بياناتك الشخصية. وتوضح
            ذه السياسة كيفية قيام شركة ت (مرسول) بجمع واستخدام ومعالجة وحفظ
            وحماية بياناتك الشخصية عند استخدام خدماتنا وخياراتك فيما يتعلق بهذه
            البيانات بما يتوافق مع نظام حماية البيانات الشخصية والأنظمة ذات
            العلاقة في مصر
          </b>
        </div>
      </div>
    </>
  );
}
