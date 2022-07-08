const onlyDate = (date) => new Date(date).toLocaleDateString().split("/")[1];
// console.log(onlyDate);
export const recentMoment = (data) => {
  // console.log('form analices area',data)
  let last7DaysData = [];
  const last7Dates = [...Array(7)].map((_, i) => {
    const d = new Date();
    d.setDate(d.getDate() - i);
    const createData = {
      price: 0,
      date: onlyDate(d),
    };
    last7DaysData.push(createData);
    return d;
  });

  for (const element of data) {
    const orderDate = onlyDate(element.createdAt);
    //
    for (const singleLast7Date of last7Dates) {
      const singleDate = onlyDate(singleLast7Date);
      if (parseInt(singleDate) === parseInt(orderDate)) {
        const index = last7DaysData.findIndex(
          (everyData) => everyData.date === singleDate
        );
        last7DaysData[index].price =
          last7DaysData[index]?.price + element.price;
        //
        break;
      }
    }
  }
  //
  return last7DaysData.reverse();
};
export const totalEarning = (data) => {
  console.log("from utilities data", data);
  let price = 0;
  data.forEach((element) => {
    // price = price + element.price;
    if (element.price) {
      price = price + element.price;
    }
  });
  return price;
};

export const totalSales = (data) => {
  return data.length;
};
export const totalOrders = (data) => {
  // const orders = data.filter((singleData) => singleData.status === "pending");
  // return orders.length;
  return data.length;
};
export const totalApproveOrders = (data) => {
  const orders = data.filter((singleData) => singleData.status === "approved");
  return orders.length;
};
export const todayEarning = (data) => {
  const todays = data.filter(
    (singleData) => onlyDate(singleData.createdAt) === onlyDate(new Date())
  );
  let price = 0;
  todays.forEach((element) => {
    // price = price + element.price;
    if (element.price) {
      price = price + element.price;
    }
  });
  return price;
};
