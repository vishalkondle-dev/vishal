import dayjs from "dayjs";
import { DATE_FORMAT } from "@vishal/constants";

export const formatDate = (
  date: Date,
  format: string = DATE_FORMAT
): string => {
  return dayjs(date).format(format);
};
