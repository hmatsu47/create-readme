import feedparser
import json
import locale

def main():
    locale.setlocale(locale.LC_TIME, 'en_US.UTF-8')
    # Qiita 記事のフィードを全件取得（最大 4 件）
    qiita = feedparser.parse('https://qiita.com/hmatsu47/feed')
    qiita_entries=qiita['entries']
    qiita_dict = []
    for item in qiita_entries:
        qiita_dict.append({'link': item['link'], 'title': item['title'], 'published': item['published']})
    # Zenn 記事のフィードを最大 4 件取得
    zenn = feedparser.parse('https://zenn.dev/hmatsu47/feed')
    zenn_entries=zenn['entries']
    zenn_dict = []
    i = 0
    for item in zenn_entries:
        zenn_dict.append({'link': item['link'], 'title': item['title'], 'published': item['published']})
        i = i + 1
        if (i > 3): break
    # Note 記事のフィードを最大 3 件取得
    note = feedparser.parse('https://note.com/hmatsu47/rss')
    note_entries=note['entries']
    note_dict = []
    i = 0
    for item in note_entries:
        note_dict.append({'link': item['link'], 'title': item['title'], 'published': item['published']})
        i = i + 1
        if (i > 2): break
    # はてなブログ記事のフィードを最大 3 件取得
    hatena = feedparser.parse('https://hmatsu47.hatenablog.com/feed')
    hatena_entries=hatena['entries']
    hatena_dict = []
    i = 0
    for item in hatena_entries:
        hatena_dict.append({'link': item['link'], 'title': item['title'], 'published': item['published']})
        i = i + 1
        if (i > 2): break
    # 連結して JSON 出力
    result = {'qiita': qiita_dict, 'zenn': zenn_dict, 'note': note_dict, 'hatena': hatena_dict}
    print(json.dumps(result, ensure_ascii=False, indent=2))

if __name__ == '__main__':
    main()
