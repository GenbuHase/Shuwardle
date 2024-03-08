import { MAX_CHALLENGES } from '../../constants/settings'
import { CompletedRow } from './CompletedRow'
import { CurrentRow } from './CurrentRow'
import { EmptyRow } from './EmptyRow'

type Props = {
  guesses: string[]
  currentGuess: string
  isRevealing?: boolean
}

export const Grid = ({ guesses, currentGuess, isRevealing }: Props) => {
  const empties =
    guesses.length < MAX_CHALLENGES - 1
      ? Array.from(Array(MAX_CHALLENGES - 1 - guesses.length))
      : []

  return (
    <div className="pb-6">
      <div className="grid grid-cols-1 auto-rows-fr grid-flow-row md:grid-cols-2 md:grid-rows-6 md:grid-flow-col gap-x-4 gap-y-1 w-fit mx-auto">
        {guesses.map((guess, i) => (
          <CompletedRow
            key={i}
            guess={guess}
            isRevealing={isRevealing && guesses.length - 1 === i}
          />
        ))}
        {guesses.length < MAX_CHALLENGES && <CurrentRow guess={currentGuess} />}
        {empties.map((_, i) => (
          <EmptyRow key={i} />
        ))}
      </div>
    </div>
  )
}
