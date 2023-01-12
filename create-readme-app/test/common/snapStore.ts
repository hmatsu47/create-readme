import * as fs from 'fs';

const snapFolder = './test/__snapshots__/';

type Result = {
  snapshot?: string;
  isStored: boolean;
};
// スナップショットをファイルから読み込む
export const loadSnapshot = (testName: string) => {
  const snapFileName = `${snapFolder}${testName}.snap.txt`;
  try {
    const snapshot = fs.readFileSync(snapFileName, 'utf-8');
    return { snapshot: snapshot, isStored: true } as Result;
  } catch (e) {
    console.log('スナップショットファイルがないので保存します。');
    return { snapshot: undefined, isStored: false } as Result;
  }
};
// スナップショットを整形する（インラインスタイル名と改行）
export const formatSnapshot = (snapshot: string) => {
  return snapshot.replace(/css-\w{8}/g, 'css-xxxxxxxx');
};
// スナップショットをファイルに保存する
export const saveSnapshot = (testName: string, snapshot: string) => {
  const snapFileName = `${snapFolder}${testName}.snap.txt`;
  try {
    fs.writeFileSync(snapFileName, snapshot);
  } catch (e) {
    console.log(`エラーが発生しました。: ${e.message}`);
  }
};
