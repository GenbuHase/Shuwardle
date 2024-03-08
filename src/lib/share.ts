import { getGuessStatuses } from './statuses'
import { solutionIndex } from './words'
import { MAX_CHALLENGES } from '../constants/settings'
import i18n from '../constants/locales'

export const shareStatus = (
  guesses: string[],
  lost: boolean,
  isHardMode: boolean
) => {
  navigator.clipboard.writeText(
    `${i18n.t('Common/Game_Title')} ${solutionIndex} ${
      lost ? 'X' : guesses.length
    }/${MAX_CHALLENGES}${isHardMode ? '*' : ''}\n\n` +
      generateEmojiGrid(guesses)
  )
}

export const generateEmojiGrid = (guesses: string[]) => {
  return guesses
    .map((guess) => {
      const status = getGuessStatuses(guess)
      return guess
        .split('')
        .map((_, i) => {
          switch (status[i]) {
            case 'correct':
              return '🟩'
            case 'present':
              return '🟨'
            default:
              return '⬜'
          }
        })
        .join('')
    })
    .join('\n')
}
