import { formatDate } from '../src/formatDate';
import { suite } from 'uvu';
import * as assert from 'uvu/assert';

// formatDate のテスト（最終的には別のテストでカバーするので削除予定）
const testFormatDate = suite('FormatDate');

testFormatDate('Format date test', () => {
  const testCase = [
    { input: new Date('2022/01/15'), expectedOutput: '2022-01-15' },
    { input: new Date('2022/11/30'), expectedOutput: '2022-11-30' },
  ];

  let expected: string[] = [];
  let actual: string[] = [];
  testCase.forEach((item) => {
    expected.push(item.expectedOutput);
    actual.push(formatDate(item.input));
  });

  assert.equal(actual, expected, 'output differs');
});

testFormatDate.run();
