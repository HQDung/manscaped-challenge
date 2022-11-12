import React, { useCallback, useState } from "react";
import { Product } from "../../models/type";
import Table, { Column, TableFooter } from "../../components/Table";
import Button from "../../components/Button";
import Modal from "../../components/Modal";

interface ProductTableProps {
  products: Product[];
  onChange: Function;
  footer?: TableFooter;
}

const ProductTable: React.FC<ProductTableProps> = ({
  products,
  onChange,
  footer,
}) => {
  const [deleteProductId, setDeleteDeleteProductId] = useState<
    string | undefined
  >();

  const openModal = (productId: string) => () =>
    setDeleteDeleteProductId(productId);

  const closeModal = () => setDeleteDeleteProductId(undefined);

  const handleDelete = () => {
    onChange(products.filter((p) => p.id !== deleteProductId));
    closeModal();
  };

  const handleAddProduct = () => {
    const newProduct: Product = {
      id: `${new Date().getTime()}`,
      name: "",
      qty: 1,
      price: 0,
    };
    onChange([...products, newProduct]);
  };

  const handleProductInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>, productId: string) => {
      onChange(
        products.map((p) =>
          p.id === productId ? { ...p, [e.target.name]: e.target.value } : p
        )
      );
    },
    [products]
  );

  const renderTotalPrice = (colId: string, row: any) =>
    `$${Number(row.price * row.qty).toFixed(2)}`;

  const renderActions = (colId: string, row: any) => (
    <button className="text-red-600" onClick={openModal(row.id)}>
      &#10006;
    </button>
  );

  const columns: Column[] = [
    { id: "img", label: "", type: "img" },
    {
      id: "name",
      label: "PRODUCT",
      type: "input",
      onChange: handleProductInputChange,
    },
    {
      id: "qty",
      label: "QUANTITY",
      type: "input",
      onChange: handleProductInputChange,
    },
    {
      id: "price",
      label: "PRICE",
      type: "input",
      onChange: handleProductInputChange,
    },
    {
      id: "totalPrice",
      label: "TOTAL PRICE",
      type: "custom",
      align: "center",
      width: 150,
      render: renderTotalPrice,
    },
    {
      id: "action",
      label: "ACTION",
      type: "custom",
      align: "center",
      width: 75,
      render: renderActions,
    },
  ];

  return (
    <>
      <h2 className="font-bold">Products:</h2>
      <Table columns={columns} rows={products} footer={footer} />
      <div className="text-right">
        <Button title="Add Product" onClick={handleAddProduct} />
      </div>
      <Modal
        title="Delete Product"
        isOpen={!!deleteProductId}
        onClose={closeModal}
      >
        <p>Do you want to delete this product?</p>
        <div className="space-x-2 text-right mt-6">
          <Button title="Yes" onClick={handleDelete} />
          <Button title="No" onClick={closeModal} />
        </div>
      </Modal>
    </>
  );
};

export default React.memo(ProductTable);
