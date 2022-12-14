import { useSelector } from "react-redux";
import { selectOrderDetails } from "../App/appSlice";
import formatDate from "../../utils/formatDate";
import CancelBtn from "./CancelBtn";
import RefundBtn from "./RefundBtn";
import ResendConfirmationBtn from "./ResendConfirmationBtn";
import ResendTracking from "./ResendTracking";
import Tag from "../../components/Tag";
import ProductTable from "./ProductTable";
import "./style.css";

function OrderCardPage() {
  const orderDetails = useSelector(selectOrderDetails);

  return (
    <div className="order-card">
      <main className="max-w-3xl py-4 px-8 w-full">
        <div className="flex items-center justify-between">
          <p className="text-lg">
            <b>Order</b> {orderDetails.id}
          </p>
          <div className="text-right text-sm">
            <p>
              Created on <time>{formatDate(orderDetails.created)}</time>
            </p>
            <p>
              Last updated on <time>{formatDate(orderDetails.updated)}</time>
            </p>
          </div>
        </div>
        <div className="mt-6 bg-white p-6 space-y-5">
          <ProductTable
            rows={orderDetails.items}
            footer={{
              label: "Total",
              value: `$${orderDetails.total}`,
            }}
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
