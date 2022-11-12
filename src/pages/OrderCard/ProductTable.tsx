import React from "react";
import { orderDetails } from "../../data";
import Table, { Column } from "../../components/Table";
import { Link } from "react-router-dom";
import { Product } from "../../models/type";

interface ProductTableProps {
  rows: Product[];
}

const ProductTable: React.FC<ProductTableProps> = ({ rows }) => {
  const renderProductName = (colId: string, row: any) => (
    <Link to="#">{row[colId]}</Link>
  );

  const renderTotalPrice = (colId: string, row: any) =>
    `$${row.price * row.qty}`;

  const columns: Column[] = [
    { id: "img", label: "", type: "img" },
    { id: "name", label: "PRODUCT", type: "custom", render: renderProductName },
    { id: "qty", label: "QUANTITY", type: "number", align: "center" },
    {
      id: "totalPrice",
      label: "PRICE",
      type: "custom",
      align: "center",
      render: renderTotalPrice,
    },
  ];

  const orderItemsFooter = {
    label: "Total",
    value: `$${orderDetails.total}`,
  };

  return <Table columns={columns} rows={rows} footer={orderItemsFooter} />;
};

export default React.memo(ProductTable);
