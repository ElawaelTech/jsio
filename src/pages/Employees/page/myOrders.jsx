import CardOrders from "../compoenents/CardOrders";
export default function MyOrders() {
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
    {
      name: "كريم",
      time: "3 ساعه",
      number: "54462",
      cost: "54",
      countitems: "10",
      items: [
        {
          item: "سماعه",
          count: "5",
        },
        {
          item: "شاشاه",
          count: "5",
        },
      ],
    },
    {
      name: "طارق",
      time: "1 ساعه",
      number: "54463",
      cost: "54",
      countitems: "4",
      items: [
        {
          item: "سماعه",
          count: "2",
        },
        {
          item: "شاشاه",
          count: "2",
        },
      ],
    },
    {
      name: "عمر",
      time: "5 ساعه",
      number: "54464",
      cost: "54",
      countitems: "9",
      items: [
        {
          item: "سماعه",
          count: "5",
        },
        {
          item: "شاشاه",
          count: "4",
        },
      ],
    },
    {
      name: "عمر",
      time: "5 ساعه",
      number: "54464",
      cost: "54",
      countitems: "9",
      items: [
        {
          item: "سماعه",
          count: "5",
        },
        {
          item: "شاشاه",
          count: "4",
        },
      ],
    },
    {
      name: "عمر",
      time: "5 ساعه",
      number: "54464",
      cost: "54",
      countitems: "9",
      items: [
        {
          item: "سماعه",
          count: "5",
        },
        {
          item: "شاشاه",
          count: "4",
        },
      ],
    },
  ];

  return (
    <>
      <div className=" row  m-auto " style={{ maxWidth: "500px" }}>
        <div className="col-12 p-1">
          <h4>الطلبات</h4>
        </div>
        <div className="col-master col-card-alert col-12 mb-4">
          {Alerts.map((x, index) => {
            return (
              <CardOrders
                key={index}
                name={x.name}
                time={x.time}
                number={x.number}
                items={x.items}
                countitems={x.countitems}
                cost={x.cost}
              />
            );
          })}
          <br />
          <br />
        </div>
      </div>
    </>
  );
}
