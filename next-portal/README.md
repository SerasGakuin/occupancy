# Seras学院 予約システム (Next.js版)

## 開発・運用ワークフロー

### 1. 開発の進め方 (ローカル)

デザインの修正や機能追加を行う場合の手順です。

1. **開発サーバーの起動**:
   ```bash
   cd next-portal
   npm run dev
   ```
   `http://localhost:3000` でプレビューできます。

2. **コードの編集**:
   - **ページ/画面**: `src/app/` 以下のファイルを編集します。
     - メニュー: `page.tsx`
     - 予約画面: `booking/page.tsx`
     - 休み登録: `rest/page.tsx`
   - **デザイン/CSS**: `src/app/globals.css` を編集します。
   - **コンポーネント**: `src/lib/` や `src/components/` (作成した場合) を編集します。

   編集するとブラウザが自動的にリロードされ、変更が反映されます。

### 2. デプロイ (本番反映)

VercelとGitHubを連携させることで、Pushするだけで自動デプロイが可能になります。

**初回のみ設定が必要です**:
1. [Vercel Dashboard](https://vercel.com/dashboard) にアクセスし、`next-portal` プロジェクトを開きます。
2. **Settings** タブを開き、サイドバーの **Git** をクリックします。
   - ※ もしGitメニューがない場合は、プロジェクトトップの "Connect Git Repository" ボタンを探してください。
3. **Connected Git Repository** セクションで、GitHubリポジトリ `SerasGakuin/seras-student-portal` を接続します。
   - Monorepo設定として、**Root Directory** に `next-portal` を指定する必要がある場合があります（通常は自動検出されます）。

**設定後のフロー**:
1. **変更をコミット**:
   ```bash
   git add .
   git commit -m "変更内容のコメント"
   ```

2. **GitHubへPush**:
   ```bash
   git push origin feature/nextjs-migration
   ```
   これだけでVercelが変更を検知し、自動的にデプロイを開始します。

### 3. ドメイン設定 (URLの変更)

デプロイされたURL (`https://next-portal-....vercel.app`) を短くしたり、固定したりすることができます。

1. [Vercel Dashboard](https://vercel.com/dashboard) でプロジェクトを開きます。
2. **Settings** > **Domains** に移動します。
3. **Edit** ボタンで、デフォルトのドメイン (`your-project.vercel.app`) を好きな名前に変更できます（他に使われていなければ）。
4. **独自ドメイン**（例: `seras-student-portal.com`）を使用する場合:
   - ドメインを追加すると、**DNS設定**（AレコードまたはCNAMEレコード）が必要になります。
   - ドメインを取得したサービス（お名前.com、GoDaddyなど）の管理画面で、Vercelが指定するIPアドレス（例: `76.76.21.21`）をAレコードとして設定してください。
   - 設定が反映されるまで数分〜数時間かかる場合があります。

### 4. 環境変数

本番環境で動作させるには、Vercelのダッシュボードで環境変数を設定する必要があります。
詳細は `NEXT_STEPS.md` を参照してください。
