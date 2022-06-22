import { suite } from 'uvu';
import * as assert from 'uvu/assert';
import { cleanup, render } from 'solid-testing-library';
import { ListParts } from '../src/ListParts';
import { loadSnapshot, formatSnapshot, saveSnapshot } from './common/snapStore';

const test = suite('ListParts');

test.after.each(cleanup);

test('<ListParts />', () => {
  const testName = 'ListParts';
  const load = loadSnapshot(testName);
  // Qiita の記事一覧でスナップショットテストを行う
  const { container } = render(() => (
    <ListParts
      title={'Qiita'}
      id={'qiita'}
      color={'#55c500'}
      list={[
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
      ]}
      url={'https://qiita.com/hmatsu47'}
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

test.run();
