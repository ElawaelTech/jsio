// import ReactDOM from "react-dom/client";
// import Cookies from "universal-cookie";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import {
  Spalesh,
  Chat,
  UsedWarning,
  Khsosya,
  Login,
  NoPage,
  EditePassword,
  ForgetPassword,
  RestorePassword,
  //---------------------
  CustomerStartPage,
  CustomerAccount,
  CustomerAlert,
  CustomerEditeProfile,
  CustomerRegister,
  CustomerOrders,
  CustomerOrderInfo,
  CustomerShopping,
  CustomerSearch,
  CustomerShoppingAnyThing,
  CustomerOrderWaiting,
  CustomerOrderCancel,
  CustomerShoppingFrom,
  CustomerShoppingTo,
  CustomerMain,
  CustomerAddRassed,
  CustomerAdressSaved,
  CustomerSubscrib,
  CustomerNotes,
  CustomerKobon,
  CustomerSupport,
  CustomerSetting,
  CustomerAdressAdd,
  CustomerAdressEdite,
  CustomerHistoryShkawa,
  // ------------------------------------
  DellerAccount,
  DellerAddRassed,
  DellerAlert,
  DellerArbah,
  DellerEditeProfile,
  DellerKobon,
  DellerMain,
  DellerNotes,
  DellerOrders,
  DellerOrderInfo,
  DellerRegister,
  DellerReplaseAcount,
  DellerSetting,
  DellerSupport,
  DellerSubscrib,
  //==========================================
  AdminHome,
  AdminOrders,
  AdminShkawa,
  AdminCustomer,
  AdminDeller,
  AdminEmpolyee,
  AdminSetting,

} from "./pages/Routing";
// --------------------------------


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<NoPage />} />
          <Route path="/" element={<Spalesh />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/EditePassword" element={<EditePassword />} />
          <Route path="/ForgetPassword" element={<ForgetPassword />} />
          <Route path="/RestorePassword" element={<RestorePassword />} />
          <Route path="/UsedWarning" element={<UsedWarning />} />
          <Route path="/Khsosya" element={<Khsosya />} />
          <Route path="Customer/StartPage" element={<CustomerStartPage />} />
          <Route path="Customer/Account" element={<CustomerAccount />} />
          <Route path="Customer/Alerts" element={<CustomerAlert />} />
          <Route
            path="Customer/AddRassed/:mony?"
            element={<CustomerAddRassed />}
          />
          <Route path="Customer/Subscrib" element={<CustomerSubscrib />} />
          <Route path="Customer/Notes" element={<CustomerNotes />} />
          <Route path="Customer/Kobon" element={<CustomerKobon />} />
          <Route
            path="Customer/Support/:number_order?"
            element={<CustomerSupport />}
          />
          <Route path="Customer/Setting" element={<CustomerSetting />} />
          <Route
            path="Customer/HistoryShkawa"
            element={<CustomerHistoryShkawa />}
          />
          <Route
            path="Customer/AdressSaved"
            element={<CustomerAdressSaved />}
          />
          <Route path="Customer/AdressAdd" element={<CustomerAdressAdd />} />
          <Route
            path="Customer/AdressEdite/:name?"
            element={<CustomerAdressEdite />}
          />
          <Route
            path="Customer/EditeProfile"
            element={<CustomerEditeProfile />}
          />
          <Route path="Customer/Register" element={<CustomerRegister />} />
          <Route path="Customer/Orders" element={<CustomerOrders />} />
          <Route
            path="Customer/OrderInfo/:order?"
            element={<CustomerOrderInfo />}
          />
             <Route path="Customer" element={<CustomerShopping />} />
          <Route path="Customer/Shopping" element={<CustomerShopping />} />
          <Route
            path="Customer/Shopping/Search/:Search?"
            element={<CustomerSearch />}
          />
          <Route
            path="Customer/Shopping/AnyShing"
            element={<CustomerShoppingAnyThing />}
          />
          <Route
            path="Customer/OrderWaiting/:number_order?/:re_order?"
            element={<CustomerOrderWaiting />}
          />
          <Route
            path="Customer/OrderCancel/:order?"
            element={<CustomerOrderCancel />}
          />
          <Route
            path="Customer/ShoppingFrom"
            element={<CustomerShoppingFrom />}
          />
          <Route path="Customer/ShoppingTo" element={<CustomerShoppingTo />} />
          <Route path="Customer" element={<CustomerMain />} />
          {/* =================== */}

          {/* <Route path="Deller/StartPage" element={<DellerStartPage />} /> */}
          <Route path="Deller/Account" element={<DellerAccount />} />
          <Route path="Deller/AddRassed/:mony?" element={<DellerAddRassed />} />
          <Route path="Deller/Alerts" element={<DellerAlert />} />
          <Route path="Deller/Arbah" element={<DellerArbah />} />
          <Route path="Deller/EditeProfile" element={<DellerEditeProfile />} />
          <Route path="Deller/Subscrib" element={<DellerSubscrib />} />
          <Route path="Deller/Kobon" element={<DellerKobon />} />
          <Route path="Deller/Notes" element={<DellerNotes />} />
          <Route path="Deller/Orders" element={<DellerOrders />} />
          <Route
            path="Deller/OrderInfo/:order?"
            element={<DellerOrderInfo />}
          />
          <Route path="Deller/Register" element={<DellerRegister />} />
          <Route
            path="Deller/ReplaseAcount"
            element={<DellerReplaseAcount />}
          />
          <Route path="Deller/Setting" element={<DellerSetting />} />
          <Route path="Deller/Support" element={<DellerSupport />} />
          <Route path="Deller/home" element={<DellerMain />} />
          <Route path="Deller" element={<DellerMain />} />
          {/* =============================================== */}
          <Route path="admin" element={<AdminHome />} />
          <Route path="admin/Orders" element={<AdminOrders />} />
           <Route path="admin/Shkawa" element={<AdminShkawa />} />
          <Route path="admin/Customer" element={<AdminCustomer />} />
          <Route path="admin/Deller" element={<AdminDeller />} />
          <Route path="admin/Empolyee" element={<AdminEmpolyee />} />
          <Route path="admin/Setting" element={<AdminSetting />} />
          {/* <Route path="admin/Orders" element={<AdminOrders />} /> */}
         
          
          {/* =================== */}
          {/* <Route path="contact/:id?/:phone?" element={<Contact />} /> */}
          {/* <Route path="contact/:id" element={<Contact />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
