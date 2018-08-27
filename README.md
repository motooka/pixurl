# PixURL
与えられたテキストから画像素材サイト「PIXTA」の素材ナンバーらしき文字列を検出して素材ページを開く、Chrome拡張です。
PIXTAの公式のものではありません。この拡張そのものも拡張の作者も、ピクスタ株式会社とは全く関係ございません。

# ライセンス
- アイコン以外：MITライセンス
- アイコン：独自ライセンス
詳しくは[LICENSE](./LICENSE)をご覧下さい。

# 開発＆デバッグ
## デバッグ実行方法
[公式のGettingStarted文書の中のマニフェスト作成の章](https://developer.chrome.com/extensions/getstarted#manifest)をよく読みましょう。
ポップアップの中で右クリックすると開発コンソールを開くことができるので、JavaScriptのエラー等はそこで確認できます。

## 開発
[WebStorm](https://www.jetbrains.com/webstorm/)で、EditorConfigプラグインを有効にした状態で操作することを推奨しますが、LF改行＋UTF8＋タブ文字 を処理できるテキストエディタなら何でも良いでしょう。

## アイコンのPNGバージョンのビルド方法
- `icon.svg` を Adobe Illustrator で開く
- 書き出しする際に、サイズの指定をする

# Chrome Web Store へのアップロード
## zipの作成方法
- Mac/Linux等の場合
	- bash（WindowsならPowerShell）でリポジトリのワーキングコピーのディレクトリに行く
	- `zip pixurl.zip icon*.png *.json *.html *.js`
- Windowsの場合
	- Explorerでリポジトリのワーキングコピーのディレクトリに行く
	- `zip pixurl.zip icon*.png *.json *.html *.js` に相当する操作をする（shiftクリックでファイルを選択して、右クリックで圧縮）

## アップロード
Googleアカウントにログインした状態で、[Chromeウェブストアのデベロッパーダッシュボード](https://chrome.google.com/webstore/developer/dashboard/)にアクセス。

