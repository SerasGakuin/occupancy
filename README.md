# Seras学院 生徒ポータル

Seras学院の生徒向けWebサービスを統合したポータルサイトです。

## 📱 サービス一覧

### 1. 在室人数表示 (`/occupancy/`)
自習室（本館・2号館）の在室人数をリアルタイムで表示します。

- **技術スタック**: HTML, CSS, Vanilla JavaScript
- **バックエンド**: Google Apps Script (GAS)
- **更新間隔**: 5秒

### 2. 予約システム (`/booking/`)
面談予約・休み登録をLIFFアプリで行います。

- **技術スタック**: HTML, CSS, JavaScript, LIFF SDK
- **バックエンド**: Google Apps Script (GAS)
- **状態**: 🚧 開発中

## 🏗️ プロジェクト構成

```
seras-student-portal/
├── index.html                   # ポータルトップページ
├── shared/                      # 共通リソース
│   ├── css/
│   │   └── variables.css        # CSS変数（全アプリ共通）
│   ├── js/
│   └── images/
├── occupancy/                   # 在室人数表示
│   ├── index.html
│   ├── css/
│   ├── js/
│   └── images/
├── booking/                     # 予約システム（LIFF）
│   ├── index.html
│   ├── css/
│   ├── js/
│   └── images/
└── docs/                        # ドキュメント
```

## 🎨 デザインシステム

すべてのアプリケーションは `shared/css/variables.css` で定義された共通のデザイントークンを使用します。

- **ブランドカラー**: `#f29f30`
- **背景色**: `#f2f4f8`
- **カードスタイル**: 角丸32px、シャドウ付き

## 🚀 開発環境のセットアップ

### 1. リポジトリのクローン

```bash
git clone https://github.com/SerasGakuin/seras-student-portal.git
cd seras-student-portal
```

### 2. ローカルサーバーの起動

```bash
npx -y live-server
```

ブラウザが自動的に開き、ファイルの変更を監視して自動リロードします。

### 3. 各アプリの開発

- **在室人数**: `occupancy/` ディレクトリで作業
- **予約システム**: `booking/` ディレクトリで作業

## 📦 デプロイ

GitHub Pagesに自動デプロイされます。`main` ブランチにプッシュすると、数分後に反映されます。

```bash
git add .
git commit -m "Update"
git push origin main
```

### アクセスURL

- **ポータル**: `https://serasgakuin.github.io/seras-student-portal/`
- **在室人数**: `https://serasgakuin.github.io/seras-student-portal/occupancy/`
- **予約システム**: `https://serasgakuin.github.io/seras-student-portal/booking/`

## 📝 ドキュメント

- [拡張提案書](docs/拡張提案書.md) - 予約システムの詳細仕様

## 🔧 バックエンド

各サービスのバックエンドはGoogle Apps Scriptで実装されています。

- **在室人数**: スプレッドシート「在室人数」に紐付け
- **予約システム**: スプレッドシート「指導報告ログ」に紐付け（予定）

## 📄 ライセンス

© 2025 Seras学院
