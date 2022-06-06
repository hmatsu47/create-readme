// APIからデータ取得
export const getApiData = async (url: string) => {
  const res = await fetch(url);
  const data = await res.json();
  return data;
}
