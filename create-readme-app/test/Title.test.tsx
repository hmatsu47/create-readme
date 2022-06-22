import { suite } from 'uvu';
import * as assert from 'uvu/assert';
import { cleanup, render, fireEvent, screen } from 'solid-testing-library';
import { Title } from '../src/Title';
import { route, setRoute } from '../src/signal';
import { loadSnapshot, formatSnapshot, saveSnapshot } from './common/snapStore';

const test = suite('Title');
const routeNames = ['articles', 'slides'];

test.after.each(cleanup);

routeNames.forEach((routeName) => {
  test(`<Title /> route="${routeName}"`, () => {
    const testName = `Title-${routeName}`;
    const load = loadSnapshot(testName);
    // route をセットしてスナップショットテストを行う
    setRoute(routeName);

    const { container } = render(() => <Title />);

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

type RoutesAndButtons = {
  routeName: string;
  buttonLabel: string;
  newRouteName: string;
  newButtonLabel: string;
};

const isInDom = (node: Node): boolean =>
  !!node.parentNode && (node.parentNode === document || isInDom(node.parentNode));

const routesAndButtons: RoutesAndButtons[] = [
  {
    routeName: 'articles',
    buttonLabel: 'Slides',
    newRouteName: 'slides',
    newButtonLabel: 'Articles',
  },
  {
    routeName: 'slides',
    buttonLabel: 'Articles',
    newRouteName: 'articles',
    newButtonLabel: 'Slides',
  },
];

routesAndButtons.forEach((routesAndButton) => {
  test(`<Title /> route="${routesAndButton.routeName}" & buttonClick="${routesAndButton.buttonLabel}"`, async () => {
    setRoute(routesAndButton.routeName);

    render(() => <Title />);
    // route に対応したボタンが表示されているか？
    const button = await screen.findByRole('button', { name: routesAndButton.buttonLabel });
    assert.ok(isInDom(button));
    // ボタンクリック後に route が切り替わるか？
    fireEvent.click(button);
    assert.ok(route() === routesAndButton.newRouteName);
    // ボタン表示も変わったか？
    const newButton = await screen.findByRole('button', { name: routesAndButton.newButtonLabel });
    assert.ok(isInDom(button));
  });
});

test.run();
