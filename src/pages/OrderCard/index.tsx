import formatDate from "../../utils/formatDate";
import { orderDetails } from "../../data";
import Table, { Column } from "../../components/Table";
import CancelBtn from "./CancelBtn";
import RefundBtn from "./RefundBtn";
import ResendConfirmationBtn from "./ResendConfirmationBtn";
import ResendTracking from "./ResendTracking";
import Tag from "../../components/Tag";
import "./style.css";
import { Link } from "react-router-dom";
import { useCallback, useMemo } from "react";

function OrderCardPage() {
  const renderProductName = (name: string) => <Link to="#">{name}</Link>;

  const columns: Column[] = [
    { id: "img", label: "", type: "img" },
    { id: "name", label: "PRODUCT", type: "custom", render: renderProductName },
    { id: "qty", label: "QUANTITY", type: "number", align: "center" },
    { id: "price", label: "PRICE", type: "money", align: "center" },
  ];

  const orderItemsFooter = {
    label: "Total",
    value: `$${orderDetails.total}`,
  };

  return (
    <div className="order-card">
      <main className="max-w-3xl py-4 px-8 w-full">
        <div className="flex items-center justify-between">
          <p className="text-lg">
            <b>Order</b> {orderDetails.id}
          </p>
          <div className="text-right text-sm">
            <p>Created on {formatDate(orderDetails.created)}</p>
            <p>Last updated on {formatDate(orderDetails.created)}</p>
          </div>
        </div>
        <div className="mt-6 bg-white p-6 space-y-5">
          <Table
            columns={columns}
            rows={orderDetails.items}
            footer={orderItemsFooter}
          />
          <section className="leading-6 text-sm">
            <p className="font-bold uppercase">Shipping Address</p>
            <p>{orderDetails.shipping.name}</p>
            <p>{orderDetails.shipping.address}</p>
            <p>{orderDetails.shipping.city}</p>
            <p>{orderDetails.shipping.country}</p>
          </section>
          <div className="space-x-4">
            {orderDetails.tags.map((tag, idx) => (
              <Tag key={`order_tag_${idx}`} title={tag} />
            ))}
          </div>
          <hr />
          <footer className="space-x-4">
            <CancelBtn />
            <RefundBtn />
            <ResendConfirmationBtn />
            <ResendTracking />
          </footer>
        </div>
      </main>
    </div>
  );
}

export default OrderCardPage;
