import { MAX_CHALLENGES } from '../../constants/settings'
import { Cell } from '../grid/Cell'
import { BaseModal } from './BaseModal'
import { useTranslation } from 'react-i18next'

type Props = {
  isOpen: boolean
  handleClose: () => void
}

export const InfoModal = ({ isOpen, handleClose }: Props) => {
  const { t } = useTranslation()

  return (
    <BaseModal
      title={t('InfoModal/InfoModal_Title')}
      isOpen={isOpen}
      handleClose={handleClose}
    >
      <p className="text-sm text-gray-500 dark:text-gray-300">
        {(t('InfoModal/InfoModal_Description1') as Function)(MAX_CHALLENGES)}
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="ゆ" status="correct" />
        <Cell value="め" />
        <Cell value="う" />
        <Cell value="つ" />
        <Cell value="つ" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        {t('InfoModal/InfoModal_Description2')}
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="ゆ" />
        <Cell value="び" />
        <Cell value="あ" status="present" />
        <Cell value="そ" />
        <Cell value="び" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        {t('InfoModal/InfoModal_Description3')}
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="い" />
        <Cell value="と" />
        <Cell value="つ" />
        <Cell value="む" status="absent" />
        <Cell value="ぎ" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        {t('InfoModal/InfoModal_Description4')}
      </p>
    </BaseModal>
  )
}
