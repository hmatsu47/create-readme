import { suite } from 'uvu';
import * as assert from 'uvu/assert';
import { cleanup, render } from '@solidjs/testing-library';
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
    title: 'Docswell',
    id: 'docswell',
    color: '#14a1db',
    list: [
      {
        link: 'https://www.docswell.com/s/hmatsu47/Z7WR15-2022-11-21-232543?ref=rss',
        title: 'Aurora MySQL 一段飛ばしのバージョンアップとその他もろもろの話',
        published: '2022-11-22T23:25:00+0900',
      },
      {
        link: 'https://www.docswell.com/s/hmatsu47/KEGG1Z-2022-10-23-210239?ref=rss',
        title: 'Aurora MySQL v1 → v3 移行完了報告',
        published: '2022-10-28T15:17:00+0900',
      },
      {
        link: 'https://www.docswell.com/s/hmatsu47/59P4JK-2022-09-30-001648?ref=rss',
        title: 'Aurora MySQL v1→v3移行の経過報告',
        published: '2022-09-30T21:19:00+0900',
      },
    ],
    url: 'https://www.docswell.com/user/hmatsu47',
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
