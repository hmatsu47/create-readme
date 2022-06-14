export type Item = {
  link: string;
  title: string;
  published: string;
};
export type Feed = {
  qiita?: Item[];
  zenn?: Item[];
  note?: Item[];
  hatena?: Item[];
  sd?: Item[];
};
