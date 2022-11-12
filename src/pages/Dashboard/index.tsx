import React, { useCallback, useState } from "react";
import formatDate from "../../utils/formatDate";
import { orderDetails } from "../../data";
import { OrderInfo, Product, Shipping } from "../../models/type";
import Button from "../../components/Button";
import InputField from "./InputField";
import ProductTable from "./ProductTable";

function DashboardPage() {
  const { shipping, items, ...rest } = orderDetails;
  const [order, setOrder] = useState<OrderInfo>(rest);
  const [shippingInfo, setShippingInfo] = useState<Shipping>(shipping);
  const [products, setProducts] = useState<Product[]>(items);

  const handleBasicInfoChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setOrder({ ...order, [e.target.name]: e.target.value });
    },
    []
  );

  const handleShippingInfoChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setShippingInfo({ ...shippingInfo, [e.target.name]: e.target.value });
    },
    []
  );

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
        <ProductTable products={products} onChange={setProducts} />
      </section>
      <footer className="text-center">
        <Button title="Save" onClick={() => {}} />
      </footer>
    </div>
  );
}

export default DashboardPage;
