import { suite } from 'uvu';
import * as assert from 'uvu/assert';
import { cleanup, render } from 'solid-testing-library';
import { ListParts } from '../src/ListParts';

const testListParts = suite('testListParts');
testListParts.after.each(cleanup);

testListParts('<ListParts />', () => {
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

  const compareHtml = `<div class="MuiBox-root css-xxxxxx"><div id="qiita" class="MuiStack-root css-xxxxxx"><a target="_blank" href="https://qiita.com/hmatsu47"><header class="MuiPaper-root MuiPaper-elevation MuiPaper-elevation4 MuiAppBar-root MuiAppBar-colorPrimary MuiAppBar-positionStatic MuiAppBar-root MuiPaper-root css-xxxxxx"><div class="MuiStack-root css-xxxxxx"><div class="MuiTypography-root MuiTypography-h6 MuiTypography-root css-xxxxxx">Qiita</div><div class="MuiTypography-root MuiTypography-subtitle1 MuiTypography-root css-xxxxxx">more...</div></div></header></a><div class="MuiPaper-root MuiPaper-elevation MuiPaper-rounded MuiPaper-elevation1 MuiPaper-root MuiPaper-outlined MuiPaper-rounded MuiCard-root MuiCard-root MuiPaper-root css-xxxxxx MuiPaper-root css-xxxxxx"><div class="MuiCardContent-root MuiCardContent-root css-xxxxxx"><div class="MuiStack-root css-xxxxxx"><div class="MuiBox-root css-xxxxxx"><a target="_blank" href="https://qiita.com/hmatsu47/items/774a3ab9441fe8eb96c7"><h6 class="MuiTypography-root MuiTypography-subtitle1 MuiTypography-root css-xxxxxx">SolidJS で Supabase の Row Level Security を試してみた…の続き（補足）</h6></a></div><div class="MuiBox-root css-xxxxxx"><h6 class="MuiTypography-root MuiTypography-subtitle1 MuiTypography-root css-xxxxxx">2022-06-01</h6></div></div></div></div><div class="MuiPaper-root MuiPaper-elevation MuiPaper-rounded MuiPaper-elevation1 MuiPaper-root MuiPaper-outlined MuiPaper-rounded MuiCard-root MuiCard-root MuiPaper-root css-xxxxxx MuiPaper-root css-xxxxxx"><div class="MuiCardContent-root MuiCardContent-root css-xxxxxx"><div class="MuiStack-root css-xxxxxx"><div class="MuiBox-root css-xxxxxx"><a target="_blank" href="https://qiita.com/hmatsu47/items/b6ba2d2994e1632c13ea"><h6 class="MuiTypography-root MuiTypography-subtitle1 MuiTypography-root css-xxxxxx">SolidJS で Supabase の Row Level Security を試してみた</h6></a></div><div class="MuiBox-root css-xxxxxx"><h6 class="MuiTypography-root MuiTypography-subtitle1 MuiTypography-root css-xxxxxx">2022-05-15</h6></div></div></div></div><div class="MuiPaper-root MuiPaper-elevation MuiPaper-rounded MuiPaper-elevation1 MuiPaper-root MuiPaper-outlined MuiPaper-rounded MuiCard-root MuiCard-root MuiPaper-root css-xxxxxx MuiPaper-root css-xxxxxx"><div class="MuiCardContent-root MuiCardContent-root css-xxxxxx"><div class="MuiStack-root css-xxxxxx"><div class="MuiBox-root css-xxxxxx"><a target="_blank" href="https://qiita.com/hmatsu47/items/d3f34f39c28a4b802966"><h6 class="MuiTypography-root MuiTypography-subtitle1 MuiTypography-root css-xxxxxx">小ネタ／Aurora MySQL v1/v2 から v3 に移行する際のユーザ権限トラブルについて</h6></a></div><div class="MuiBox-root css-xxxxxx"><h6 class="MuiTypography-root MuiTypography-subtitle1 MuiTypography-root css-xxxxxx">2022-03-18</h6></div></div></div></div></div></div>`;

  assert.snapshot(
    container.innerHTML.replace(/css-\w{6}/g, 'css-xxxxxx').replace(/\r/g, ' '),
    compareHtml
  );
});

testListParts.run();
