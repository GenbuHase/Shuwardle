export const ja = {
  translation: {
    // src/App.tsx
    'App/AboutGame': 'このゲームについて',
    'App/Win_Messages': () => ['すばらしい！', 'やったね！', 'よくやった！'],
    'App/Alert/GameCopied': '結果をクリップボードにコピーしました',
    'App/Alert/NotEnoughLetters': '文字が全て入力されていません',
    'App/Alert/WordNotFound': '指定された単語が見つかりません',
    'App/Alert/CurrentLanguage': '現在お使いの言語は日本語です',
    'App/Alert/CorrectWord': (solution: string) => `正解は${solution}です`,

    // src/components/keyboard/Keyboard.tsx
    'Keyboard/Enter': 'ENTER',
    'Keyboard/Delete': 'DELETE',

    // src/components/modals/StatsModal.tsx
    'StatsModal/Statistics_Title': '統計',
    'StatsModal/GuessDistribution': 'これまでの結果',
    'StatsModal/NewWord': 'プレイ可能まで残り',
    'StatsModal/Share': 'シェア',

    // src/components/stats/StatBar.tsx
    'StatBar/TotalTries': 'トライ数',
    'StatBar/SuccessRate': '成功率',
    'StatBar/CurrentStreak': '現在ストリーク',
    'StatBar/BestStreak': '最高ストリーク',

    // src/components/modals/AboutModal.ts
    'AboutModal/AboutModal_Heading1': 'このゲームについて',
    'AboutModal/AboutModal_Heading2': '関連リンク',

    'AboutModal/AboutModal_Description1': (game_title: string) =>
      `${game_title}は指文字を使う単語当てゲームです。
      辞書データには『現代書き言葉UniDic 3.1.0』(The UniDic Consortium, 2021)を、
      指文字の表示には『手話 指文字 一覧 セット』(K-factory, 2022)を利用させていただいております。
      また、本ページではGoogle Analyticsを利用しています。`,

    'AboutModal/AboutModal_Description2_ShuwardleRepository':
      'Shuwardle on GitHub',
    'AboutModal/AboutModal_Description2_Original': '本家様',
    'AboutModal/AboutModal_Description2_Dictionary': '語彙の辞書データ',
    'AboutModal/AboutModal_Description2_Fingerspelling': '指文字の画像セット',

    // src/components/modals/InfoModal.ts
    'InfoModal/InfoModal_Title': 'あそびかた',
    'InfoModal/InfoModal_Description1': (max_challenges: number) =>
      `${max_challenges}回の試行で単語を当ててください。それぞれの試行ごとに、タイルの色が変化し、あなたの予想がどれだけその単語に近かったかが分かります。`,
    'InfoModal/InfoModal_Description2':
      '"ゆ"が単語に含まれており、なおかつ正しい場所にある。',
    'InfoModal/InfoModal_Description3':
      '"あ"が単語に含まれているが、異なる場所にある。',
    'InfoModal/InfoModal_Description4': '"む"が単語に含まれていない。',
  },
}

export default ja
