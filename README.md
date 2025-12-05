# Seras Student Portal

## 概要
Seras学院の生徒向けポータルサイトのソースコードリポジトリです。本アプリケーションは、自習室の利用状況確認や面談予約などの機能を統合し、生徒の学習環境をサポートすることを目的としています。Next.js (App Router) をベースに構築され、LINE LIFFを用いた認証基盤を採用しています。

## 主な機能

### 1. 在室状況モニタリング (`/occupancy`)
自習室（本館および2号館）の現在の利用状況を可視化します。
- **リアルタイム更新**: Google Sheets APIを経由して、最新の在室人数を取得・表示します。
- **自動リロード**: 定期的なポーリングにより、常に最新の状況をユーザーに提供します。

### 2. 予約・連絡システム (`/booking`)
面談の予約および欠席連絡を行うためのインターフェースです。
- **面談予約**:
    - 日付および時間帯を選択し、面談を予約します。
    - Google Calendar APIと連携し、予約確定時にカレンダーへ予定を自動登録します。
    - 過去の日付や無効な時間帯の選択を防ぐバリデーション機能を実装しています。
- **欠席登録**:
    - 簡易な操作で欠席予定を登録できます。

## アーキテクチャ

本プロジェクトでは、スケーラビリティと保守性を重視し、**Feature-based Architecture**（機能単位のアーキテクチャ）を採用しています。

- **`src/features`**: 機能ごとにディレクトリを分割し、関連するコンポーネントやロジックを集約しています（例: `booking`, `occupancy`）。
- **`src/components/ui`**: アプリケーション全体で利用される汎用的なUIコンポーネント（ボタン、カード等）を管理します。
- **`src/lib`**: 外部APIクライアント（Google, LINE）や共通ユーティリティを配置しています。

## 技術スタック

| カテゴリ | 技術 | バージョン | 備考 |
| --- | --- | --- | --- |
| **Framework** | Next.js | 16.0.7 | App Router採用 |
| **Language** | TypeScript | 5.x | |
| **UI Library** | React | 19.2.0 | |
| **Styling** | CSS Modules | - | Vanilla CSSベース |
| **Auth** | LINE LIFF | 2.27.3 | LINE Front-end Framework |
| **Backend** | Google APIs | - | Sheets, Calendar |

## 開発環境のセットアップ

### 前提条件
- Node.js v20以上
- npm

### インストール手順

1. リポジトリのクローン:
   ```bash
   git clone <repository-url>
   cd seras-student-portal
   ```

2. 依存パッケージのインストール:
   ```bash
   npm install
   ```

3. 環境変数の設定:
   プロジェクトルートに `.env.local` ファイルを作成し、以下の変数を設定してください。

   ```env
   # Google Sheets API
   GOOGLE_SHEETS_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\n..."
   GOOGLE_SHEETS_CLIENT_EMAIL="example@service-account.iam.gserviceaccount.com"
   GOOGLE_SHEETS_SPREADSHEET_ID="your_spreadsheet_id"

   # Google Calendar API
   GOOGLE_CALENDAR_ID="your_calendar_id"

   # LINE LIFF
   NEXT_PUBLIC_LIFF_ID="your_liff_id"
   ```

4. 開発サーバーの起動:
   ```bash
   npm run dev
   ```
   ブラウザで `http://localhost:3000` にアクセスして動作を確認してください。

## ディレクトリ構成

```
seras-student-portal/
├── src/
│   ├── app/                    # Next.js App Router ページ・API定義
│   ├── components/             # 共有コンポーネント
│   │   └── ui/                 # 汎用UIパーツ
│   ├── features/               # 機能別モジュール
│   │   ├── booking/            # 予約機能関連
│   │   └── occupancy/          # 在室状況機能関連
│   ├── lib/                    # 外部連携・ユーティリティ
│   └── types/                  # 型定義
├── public/                     # 静的アセット
└── ...
```

## 開発ガイドライン

- **コンポーネント設計**:
    - 再利用可能なUI部品は `src/components/ui` に配置してください。
    - 特定のドメインロジックを含むコンポーネントは `src/features` 配下に配置してください。
- **スタイリング**:
    - CSS Modules を使用し、コンポーネントスコープでスタイルを適用することを原則とします。
    - グローバルな色定義や変数は `src/app/globals.css` を参照してください。
