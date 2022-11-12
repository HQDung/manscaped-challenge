import React, { useCallback, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectOrderDetails, updateOrder } from "../App/appSlice";
import formatDate from "../../utils/formatDate";
import { OrderInfo, Product, Shipping } from "../../models/type";
import Button from "../../components/Button";
import InputField from "./InputField";
import ProductTable from "./ProductTable";

function DashboardPage() {
  const dispatch = useDispatch();
  const orderDetails = useSelector(selectOrderDetails);
  const { shipping, items, ...rest } = orderDetails;
  const [order, setOrder] = useState<OrderInfo>(rest);
  const [shippingInfo, setShippingInfo] = useState<Shipping>(shipping);
  const [products, setProducts] = useState<Product[]>(items);
  const [savedIndicatorHidden, setSavedIndicatorHidden] =
    useState<boolean>(true);

  useEffect(() => {
    if (!savedIndicatorHidden)
      setTimeout(() => {
        setSavedIndicatorHidden(true);
      }, 3000);
  }, [savedIndicatorHidden]);

  const handleBasicInfoChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setOrder((newOrder) => ({
        ...newOrder,
        [e.target.name]: e.target.value,
      }));
    },
    []
  );

  const handleShippingInfoChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setShippingInfo((newInfo) => ({
        ...newInfo,
        [e.target.name]: e.target.value,
      }));
    },
    []
  );

  const handleProductsChange = useCallback((data: Product[]) => {
    setProducts(data);
    const total = +Number(
      data.reduce<number>((prev, cur) => {
        prev += cur.price * cur.qty;
        return prev;
      }, 0)
    ).toFixed(2);
    setOrder((newOrder) => ({
      ...newOrder,
      total,
    }));
  }, []);

  const handleSave = () => {
    const newOrderDetails = {
      ...order,
      shipping: { ...shippingInfo },
      items: [...products],
    };
    dispatch(updateOrder(newOrderDetails));
    setTimeout(() => {
      setSavedIndicatorHidden(false);
    }, 200);
  };

  return (
    <div className="max-w-screen-lg mx-auto">
      <section className="space-y-4 border-b pb-4 mb-4">
        <InputField
          label="Order Id"
          name="id"
          value={order.id}
          onChange={handleBasicInfoChange}
        />
        <InputField
          label="Created"
          type="date"
          name="created"
          value={formatDate(order.created, "yyyy-MM-dd")}
          onChange={handleBasicInfoChange}
        />
        <InputField
          label="Updated"
          type="date"
          value={formatDate(order.updated, "yyyy-MM-dd")}
          name="updated"
          onChange={handleBasicInfoChange}
        />
      </section>
      <section className="space-y-4 border-b pb-4 mb-4">
        <h2 className="font-bold">Shipping Info:</h2>
        <InputField
          label="Name"
          name="name"
          value={shippingInfo.name}
          onChange={handleShippingInfoChange}
        />
        <InputField
          label="Address"
          name="address"
          value={shippingInfo.address}
          onChange={handleShippingInfoChange}
        />
        <InputField
          label="City"
          name="city"
          value={shippingInfo.city}
          onChange={handleShippingInfoChange}
        />
        <InputField
          label="Country"
          name="country"
          value={shippingInfo.country}
          onChange={handleShippingInfoChange}
        />
      </section>
      <section className="space-y-4 border-b pb-4 mb-4">
        <ProductTable
          products={products}
          onChange={handleProductsChange}
          footer={{
            label: "Total",
            value: `$${order.total}`,
          }}
        />
      </section>
      <footer className="text-center">
        <Button title="Save" onClick={handleSave} />
        <span
          className={`text-xl text-green-500 p-3 ${
            savedIndicatorHidden ? "invisible" : "visible"
          }`}
        >
          &#10003;
        </span>
      </footer>
    </div>
  );
}

export default DashboardPage;
