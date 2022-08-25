import feedparser
import json
import locale

def main():
    locale.setlocale(locale.LC_TIME, 'en_US.UTF-8')
    # Qiita 記事のフィードを 3 件取得
    qiita = feedparser.parse('https://qiita.com/hmatsu47/feed')
    qiita_dict = convert_feed(qiita, 3)
    # Zenn 記事のフィードを 3 件取得
    zenn = feedparser.parse('https://zenn.dev/hmatsu47/feed')
    zenn_dict = convert_feed(zenn, 3)
    # Note 記事のフィードを 2 件取得
    note = feedparser.parse('https://note.com/hmatsu47/rss')
    note_dict = convert_feed(note, 2)
    # はてなブログ記事のフィードを 2 件取得
    hatena = feedparser.parse('https://hmatsu47.hatenablog.com/feed')
    hatena_dict = convert_feed(hatena, 2)
    # Speaker Deck 資料のフィードを 12 件取得
    sd = feedparser.parse('https://speakerdeck.com/hmatsu47.atom')
    sd_dict = convert_feed(sd, 12)
    # 連結して JSON 出力
    result = {'qiita': qiita_dict, 'zenn': zenn_dict, 'note': note_dict, 'hatena': hatena_dict, 'sd': sd_dict}
    print(json.dumps(result, ensure_ascii=False, indent=2))

def convert_feed(feed, count):
    entries=feed['entries']
    dict = []
    i = 0
    for item in entries:
        dict.append({'link': item['link'], 'title': item['title'], 'published': item['published']})
        i = i + 1
        if (i > (count - 1)): break
    if (count > i): raise ValueError(f'フィードの件数が不足しています（{i}/{count}）')
    return dict

if __name__ == '__main__':
    main()
