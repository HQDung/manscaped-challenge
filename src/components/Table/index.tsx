import React from "react";
import "./style.css";

type colType = "img" | "money" | "number" | "custom";
type colAlign = "left" | "center" | "right";

export interface Column {
  id: string;
  label: string;
  type?: colType;
  render?: Function;
  align?: colAlign;
}

export interface TableFooter {
  label: string;
  value: string | number;
}

interface TableProps {
  columns: Column[];
  rows: any;
  footer?: TableFooter;
}

const Table: React.FC<TableProps> = ({ columns, rows, footer }) => {
  const getFormattedValue = (row: any, col: Column) => {
    const value = row[col.id];
    switch (col.type) {
      case "img":
        return <img src={value} width={60} />;
      case "money":
        return `$${value}`;
      case "custom":
        return col.render?.(value);
      default:
        return value;
    }
  };

  return (
    <table className="w-full">
      <thead className="table-head">
        <tr>
          {columns.map((col: Column) => (
            <th
              key={`col_${col.id}`}
              style={{ textAlign: col.align || "left" }}
            >
              {col.label}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row: any, idx: number) => (
          <tr key={`row_${idx}`} className="table-row">
            {columns.map((col: Column, colIdx: number) => (
              <td
                key={`row_${idx}_col_${colIdx}`}
                className="table-cell"
                style={{ textAlign: col.align || "left" }}
              >
                {getFormattedValue(row, col)}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
      {footer && (
        <tfoot>
          <tr className="table-row">
            <td colSpan={columns.length - 1} className="table-cell font-bold">
              {footer.label}:
            </td>
            <td className="table-cell text-center">{footer.value}</td>
          </tr>
        </tfoot>
      )}
    </table>
  );
};

export default React.memo(Table);
