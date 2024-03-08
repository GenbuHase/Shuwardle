import { getStatuses } from '../../lib/statuses'
import { Key } from './Key'
import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'

type Props = {
  onChar: (value: string) => void
  onDelete: () => void
  onEnter: () => void
  guesses: string[]
  isRevealing?: boolean
}

export const Keyboard = ({
  onChar,
  onDelete,
  onEnter,
  guesses,
  isRevealing,
}: Props) => {
  const { t } = useTranslation()

  const CHARS = [
    ['あ', 'か', 'さ', 'た', 'な', 'は', 'ま', 'や', 'ら', 'わ'],
    ['い', 'き', 'し', 'ち', 'に', 'ひ', 'み', '', 'り', 'を'],
    ['う', 'く', 'す', 'つ', 'ぬ', 'ふ', 'む', 'ゆ', 'る', 'ん'],
    ['え', 'け', 'せ', 'て', 'ね', 'へ', 'め', '', 'れ', 'っ'],
    ['お', 'こ', 'そ', 'と', 'の', 'ほ', 'も', 'よ', 'ろ', 'ー'],
    ['ぁ', 'が', 'ざ', 'だ', '', 'ば', 'ぱ', 'ゃ', '', ''],
    ['ぃ', 'ぎ', 'じ', 'ぢ', '', 'び', 'ぴ', '', '', ''],
    ['ぅ', 'ぐ', 'ず', 'づ', '', 'ぶ', 'ぷ', 'ゅ', '', ''],
    ['ぇ', 'げ', 'ぜ', 'で', '', 'べ', 'ぺ', '', '', ''],
    ['ぉ', 'ご', 'ぞ', 'ど', '', 'ぼ', 'ぽ', 'ょ', '', ''],
  ]

  const charStatuses = getStatuses(guesses)

  const onClick = (value: string) => {
    if (value === 'ENTER') {
      onEnter()
    } else if (value === 'DELETE') {
      onDelete()
    } else {
      onChar(value)
    }
  }

  useEffect(() => {
    const listener = (e: KeyboardEvent) => {
      if (e.code === 'Enter') {
        onEnter()
      } else if (e.code === 'Backspace') {
        onDelete()
      }
    }
    window.addEventListener('keyup', listener)
    return () => {
      window.removeEventListener('keyup', listener)
    }
  }, [onEnter, onDelete, onChar])

  return (
    <div>
      {(() => {
        const rows = []

        for (const row of CHARS) {
          const keys = []

          for (const key of row) {
            keys.push(
              <Key
                value={key}
                key={key || Math.floor(Math.random() * 1000000000000)}
                onClick={onClick}
                status={charStatuses[key]}
                isRevealing={isRevealing}
              />
            )
          }

          rows.push(
            <div
              className="flex justify-center mb-1"
              key={Math.floor(Math.random() * 1000000000000)}
            >
              {keys}
            </div>
          )
        }

        return rows
      })()}
      <div className="flex justify-center">
        <Key width={40 * 5 + 2 * 2 * 4} value="DELETE" onClick={onClick}>
          {t('Keyboard/Delete')}
        </Key>
        <Key width={40 * 5 + 2 * 2 * 4} value="ENTER" onClick={onClick}>
          {t('Keyboard/Enter')}
        </Key>
      </div>
    </div>
  )
}
