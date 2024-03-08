export const en = {
  translation: {
    // Common
    'Common/Game_Title': 'Shuwardle',

    // src/App.tsx
    'App/AboutGame': 'About this game',
    'App/Win_Messages': () => ['Great Job!', 'Awesome', 'Well done!'],
    'App/Alert/GameCopied': 'Game copied to clipboard',
    'App/Alert/NotEnoughLetters': 'Not enough letters',
    'App/Alert/WordNotFound': 'Word not found',
    'App/Alert/CurrentLanguage': 'Your current language is English',
    'App/Alert/CorrectWord': (solution: string) => `The word was ${solution}`,

    // src/components/keyboard/Keyboard.tsx
    'Keyboard/Enter': 'ENTER',
    'Keyboard/Delete': 'DELETE',

    // src/components/modals/StatsModal.tsx
    'StatsModal/Statistics_Title': 'Statistics',
    'StatsModal/GuessDistribution': 'Guess Distribution',
    'StatsModal/NewWord': 'New word in',
    'StatsModal/Share': 'Share',

    // src/components/stats/StatBar.tsx
    'StatBar/TotalTries': 'Total tries',
    'StatBar/SuccessRate': 'Success rate',
    'StatBar/CurrentStreak': 'Current streak',
    'StatBar/BestStreak': 'Best streak',

    // src/components/modals/AboutModal.tsx
    'AboutModal/AboutModal_Heading1': 'About',
    'AboutModal/AboutModal_Heading2': 'Related Links',

    'AboutModal/AboutModal_Description1': (game_title: string) =>
      `${game_title} is created as a word guessing using Japanese fingerspelling.
      This project uses "現代書き言葉UniDic"(The UniDic Consortium, 2021) as a dictionary of vocabularies,
      and "手話 指文字 一覧 セット"(K-factory, 2022) as a image-set to display fingerspelling.
      This page uses Google Analytics.`,

    'AboutModal/AboutModal_Description2_ShuwardleRepository':
      'Shuwardle on GitHub',
    'AboutModal/AboutModal_Description2_Original': 'An Original Game',
    'AboutModal/AboutModal_Description2_Dictionary':
      'A Dictionary of Vocabularies',
    'AboutModal/AboutModal_Description2_Fingerspelling':
      'An Image-set of Fingerspelling',

    // src/components/modals/InfoModal.ts
    'InfoModal/InfoModal_Title': 'How to play',
    'InfoModal/InfoModal_Description1': (max_challenges: number) =>
      `Guess the word in ${max_challenges} tries. After each guess, the color of the tiles will change to show how close your guess was to the word.`,
    'InfoModal/InfoModal_Description2':
      'The letter "ゆ" is in the word and in the correct spot.',
    'InfoModal/InfoModal_Description3':
      'The letter "あ" is in the word but in the wrong spot.',
    'InfoModal/InfoModal_Description4':
      'The letter "む" is not in the word in any spot.',
  },
}

export default en
