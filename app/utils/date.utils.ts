import dayjs from "dayjs";
import * as timeago from "timeago.js";

/**
 * Turn date into readable format of the past, eg. 3 days ago 
 * @param due the due date we want to check for
 * @param readableForDays the maximum past days we want to format nicely
 * @returns human readable of past dates 
 */
export function formatDue(due: string | null, readableForDays = 3) {
  if (!due) return due;
  const isFarDaysAgo = dayjs().diff(due, "day") < readableForDays;
  return isFarDaysAgo ? timeago.format(due) : dayjs(due).format("DD.MM.YYYY");
}
