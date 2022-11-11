import format from "date-fns/format";
const formatDate = (date: string, pattern: string = "MMM do yyyy") =>
  format(new Date(date), pattern);

export default formatDate;
