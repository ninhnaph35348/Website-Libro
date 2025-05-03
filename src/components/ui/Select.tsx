import { format } from "date-fns"; // nhớ: npm install date-fns

const [groupBy, setGroupBy] = useState("month");
const [fromDate, setFromDate] = useState<string>("");
const [toDate, setToDate] = useState<string>("");
const [year, setYear] = useState<number>(new Date().getFullYear());

const handleQuickSelect = (type: string) => {
  const today = new Date();
  let start, end;

  switch (type) {
    case "this_week":
      start = new Date(today.setDate(today.getDate() - today.getDay() + 1));
      end = new Date();
      break;
    case "last_week":
      start = new Date(today.setDate(today.getDate() - today.getDay() - 6));
      end = new Date(today.setDate(start.getDate() + 6));
      break;
    case "this_month":
      start = new Date(today.getFullYear(), today.getMonth(), 1);
      end = new Date();
      break;
    case "last_month":
      start = new Date(today.getFullYear(), today.getMonth() - 1, 1);
      end = new Date(today.getFullYear(), today.getMonth(), 0);
      break;
    default:
      start = null;
      end = null;
  }

  if (start && end) {
    setFromDate(format(start, "yyyy-MM-dd"));
    setToDate(format(end, "yyyy-MM-dd"));
    setYear(start.getFullYear());
  }
};
