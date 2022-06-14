export const formatDate = (dateTime: Date) => {
  const year = String(dateTime.getFullYear());
  const month = String(dateTime.getMonth() + 1).padStart(2, '0');
  const date = String(dateTime.getDate()).padStart(2, '0');
  return `${year}-${month}-${date}`;
};
