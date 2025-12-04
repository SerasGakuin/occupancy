# Seras学院 生徒ポータル

Seras学院の生徒向けWebサービスを統合したポータルサイトです。
Next.js (App Router) を採用し、モダンで高速なユーザー体験を提供します。

## 🌟 主な機能

### 1. 🏢 在室人数表示 (`/occupancy`)
自習室（本館・2号館）の現在の利用状況をリアルタイムで確認できます。
- **リアルタイム更新**: Google Sheets APIを通じて最新の人数を取得。
- **視覚的なUI**: モグラのキャラクターアイコンを使用し、混雑状況を直感的に把握可能。
- **自動リロード**: 定期的にデータを再取得し、常に最新情報を表示。

### 2. 📅 予約システム (`/booking`)
面談の予約や欠席連絡を簡単に行えます。LINE LIFFと連携し、ユーザーIDを自動取得します。

#### 面談予約 (`/booking/reserve`)
- **直感的な操作**:
    - **日付選択**: 「本日」「明日」バッジや週末カラー表示で、迷わず日付を選択。
    - **時間選択**: 独自開発のタイムレンジスライダーにより、開始・終了時間をスムーズに設定。
- **Googleカレンダー連携**: 予約完了と同時に、教室のGoogleカレンダーに予定が自動登録されます（JST対応）。
- **バリデーション**: 過去の日付や無効な時間範囲の入力を防止。

#### 休み登録 (`/booking/rest`)
- **シンプル登録**: 日付を選択するだけで、簡単に欠席連絡が可能。

## 🏗️ アーキテクチャ & ディレクトリ構成

本プロジェクトは **Feature-based Architecture** を採用しており、機能ごとにコンポーネントを整理することで、スケーラビリティと保守性を高めています。

```
seras-student-portal/
├── src/
│   ├── app/                    # Next.js App Router (ページルーティング)
│   │   ├── api/               # API Routes (BFF層)
│   │   ├── booking/           # 予約機能のページ
│   │   ├── occupancy/         # 在室状況機能のページ
│   │   └── globals.css        # グローバルスタイル (CSS Variables定義)
│   │
│   ├── components/             # コンポーネント
│   │   └── ui/                # 汎用UIコンポーネント (Button, GlassCard等)
│   │
│   ├── features/               # 機能別コンポーネント
│   │   ├── booking/           # 予約機能固有 (TimeRangeSlider, ButtonGroup等)
│   │   └── occupancy/         # 在室状況固有 (OccupancyCard, GuideCard等)
│   │
│   ├── lib/                    # ユーティリティ・外部連携ロジック
│   │   ├── googleCalendar.ts  # Google Calendar API連携
│   │   ├── googleSheets.ts    # Google Sheets API連携
│   │   └── liff.tsx           # LINE LIFF連携フック
│   │
│   └── types/                  # TypeScript型定義
│
├── public/                     # 静的ファイル (画像等)
└── README.md                   # プロジェクトドキュメント
```

## 📚 技術スタック

| カテゴリ | 技術 | バージョン | 用途 |
| --- | --- | --- | --- |
| **Frontend** | Next.js (App Router) | 16.0.7 | アプリケーションフレームワーク |
| | React | 19.2.0 | UIライブラリ |
| | TypeScript | 5.x | 開発言語 |
| **Styling** | CSS Modules | - | コンポーネント指向のスタイリング |
| **Auth** | LINE LIFF | 2.27.3 | ユーザー認証・ID取得 |
| **Backend** | Google Apps Script | - | 簡易バックエンド・DB代用 |
| **Infra** | Vercel | - | ホスティング・デプロイ |

## 🚀 開発環境のセットアップ

### 前提条件
- Node.js 20以上
- npm

### 1. インストール
```bash
npm install
```

### 2. 環境変数の設定
`.env.local` ファイルをルートに作成し、必要なキーを設定してください（詳細は管理者にお問い合わせください）。

```env
# Google Sheets API
GOOGLE_SHEETS_PRIVATE_KEY="..."
GOOGLE_SHEETS_CLIENT_EMAIL="..."
GOOGLE_SHEETS_SPREADSHEET_ID="..."

# Google Calendar API
GOOGLE_CALENDAR_ID="..."

# LINE LIFF
NEXT_PUBLIC_LIFF_ID="..."
```

### 3. 開発サーバー起動
```bash
npm run dev
```
`http://localhost:3000` にアクセスして確認します。

## �️ 開発ガイドライン

- **コンポーネント作成**:
    - 汎用的なUIパーツは `src/components/ui` に配置。
    - 特定の機能に依存するパーツは `src/features/[feature]/components` に配置。
- **スタイリング**:
    - 原則として CSS Modules (`.module.css`) を使用。
    - 色や共通の定数は `src/app/globals.css` のCSS変数を使用すること（`var(--brand-color)` 等）。
- **コミット**:
    - 変更内容がわかるように明確なメッセージを記述してください。

## 🗺️ ロードマップ

- [x] **Phase 1: 基盤構築 & UI刷新** (Current)
    - Next.js移行完了
    - モダンUIの実装（Glassmorphism, Animations）
    - コンポーネント設計の最適化
- [ ] **Phase 2: LIFF連携強化**
    - 実機でのLIFF動作検証
    - ユーザープロフィールの活用
- [ ] **Phase 3: 本番運用**
    - Vercel本番環境へのデプロイ
    - パフォーマンスチューニング

## 📄 ライセンス
© 2025 Seras学院
