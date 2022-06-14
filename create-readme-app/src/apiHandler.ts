// APIからデータ取得
export const getApiData = async (url: string) => {
  return await (await fetch(url)).json();
};
