import { suite } from 'uvu';
import * as assert from 'uvu/assert';
import { cleanup, render } from 'solid-testing-library';
import { ListParts } from '../src/ListParts';
import { loadSnapshot, formatSnapshot, saveSnapshot } from './common/snapStore';

const test = suite('ListParts');

type ListItem = {
  link: string;
  title: string;
  published: string;
};
type Parts = {
  title: string;
  id: string;
  color: string;
  list: ListItem[];
  url: string;
};

const listParts: Parts[] = [
  {
    title: 'Qiita',
    id: 'qiita',
    color: '#55c500',
    list: [
      {
        link: 'https://qiita.com/hmatsu47/items/774a3ab9441fe8eb96c7',
        title: 'SolidJS で Supabase の Row Level Security を試してみた…の続き（補足）',
        published: '2022-06-01T00:15:37+09:00',
      },
      {
        link: 'https://qiita.com/hmatsu47/items/b6ba2d2994e1632c13ea',
        title: 'SolidJS で Supabase の Row Level Security を試してみた',
        published: '2022-05-15T18:32:24+09:00',
      },
      {
        link: 'https://qiita.com/hmatsu47/items/d3f34f39c28a4b802966',
        title: '小ネタ／Aurora MySQL v1/v2 から v3 に移行する際のユーザ権限トラブルについて',
        published: '2022-03-18T19:44:57+09:00',
      },
    ],
    url: 'https://qiita.com/hmatsu47',
  },
  {
    title: 'Speaker Deck',
    id: 'sd',
    color: '#009287',
    list: [
      {
        link: 'https://speakerdeck.com/hmatsu47/solidjs-de-supabase-false-row-level-security-woshi-sitemita',
        title: 'SolidJS で Supabase の Row Level Security を試してみた',
        published: '2022-05-30T10:19:23-04:00',
      },
      {
        link: 'https://speakerdeck.com/hmatsu47/aurora-mysql-v1-nil-v3-falseyi-xing-diao-cha-ji-hua-bian',
        title: 'Aurora MySQL v1 → v3 の移行（調査・計画編）',
        published: '2022-04-28T23:25:58-04:00',
      },
      {
        link: 'https://speakerdeck.com/hmatsu47/she-nei-desupidoatupukontesutokai-cui-nitiao-zhan-sitahua',
        title: '社内でスピードアップコンテスト開催に挑戦した話',
        published: '2022-04-11T09:44:28-04:00',
      },
    ],
    url: 'https://speakerdeck.com/hmatsu47',
  },
];

test.after.each(cleanup);

listParts.forEach((parts) => {
  test(`<ListParts /> id=${parts.id}`, () => {
    const testName = `ListParts-${parts.id}`;
    const load = loadSnapshot(testName);
    // Qiita の記事一覧でスナップショットテストを行う
    const { container } = render(() => (
      <ListParts
        title={parts.title}
        id={parts.id}
        color={parts.color}
        list={parts.list}
        url={parts.url}
      />
    ));

    const actualHtml = formatSnapshot(container.innerHTML);
    if (load.isStored) {
      // スナップショットファイルがあった場合は比較
      assert.snapshot(actualHtml, load.snapshot!);
    } else {
      // なかった場合はスナップショットをファイルに保存
      saveSnapshot(testName, actualHtml);
    }
  });
});

test.run();
