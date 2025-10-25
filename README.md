# react-firebase-blog

[PokeAPI](https://pokeapi.co/)を使って React で実装したポケモン図鑑のリポジトリです。

## プロジェクトの新規作成方法

- app コンテナを起動

```bash
make up
```

- app コンテナの稼働状況を確認

```bash
make ps
```

- app コンテナに入る

```bash
make app
```

- app コンテナ内でプロジェクトを作成(`despatched`)

```bash
npx create-react-app .
```

- React のバージョン確認

```bash
npm list react
react-firebase-blog@0.1.0 /react-firebase-blog
+-- @testing-library/react@16.3.0
| `-- react@19.1.1 deduped
+-- react-dom@19.1.1
| `-- react@19.1.1 deduped
+-- react-scripts@5.0.1
| `-- react@19.1.1 deduped
`-- react@19.1.1
```

- React18 を使用したいので、ダウングレードする

```bash
npm install --save react@18.3.1 react-dom@18.3.1
```

- React のバージョン確認

```
# npm list react
react-firebase-blog@0.1.0 /react-firebase-blog
+-- @testing-library/react@16.3.0
| `-- react@18.3.1 deduped
+-- react-dom@18.3.1
| `-- react@18.3.1 deduped
+-- react-scripts@5.0.1
| `-- react@18.3.1 deduped
`-- react@18.3.1
```

- プロジェクト直下で Git 管理したいので、競合を防止するため、`react-firebase-blog`配下に新規作成された次のファイルをコピーして、削除

```bash
cp -p react-firebase-blog/.gitignore .
rm -rf react-firebase-blog/.gitignore react-firebase-blog/README.md
```

- app コンテナ内でサーバーを起動

```bash
make rebuild
```

- [localhost:3000](localhost:3000)にアクセス

## 参考

- [Start a New React Project](https://18.react.dev/learn/start-a-new-react-project)
- [Devcontainer で Claude Code を使う時は features でインストール出来る](https://qiita.com/fussy113/items/eba52ac807c060dce379)
