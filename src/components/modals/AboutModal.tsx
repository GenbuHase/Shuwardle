import { useTranslation } from 'react-i18next'
import { BaseModal } from './BaseModal'

type Props = {
  isOpen: boolean
  handleClose: () => void
}

export const AboutModal = ({ isOpen, handleClose }: Props) => {
  const { t, i18n } = useTranslation()

  return (
    <BaseModal
      title={t('AboutModal/AboutModal_Heading1')}
      isOpen={isOpen}
      handleClose={handleClose}
    >
      <p className="text-sm text-gray-500 dark:text-gray-300">
        {(t('AboutModal/AboutModal_Description1') as Function)(
          i18n.t('Common/Game_Title')
        )}
      </p>

      <h4 className="text-lg leading-6 font-medium text-gray-900 dark:text-gray-100 mt-5">
        {t('AboutModal/AboutModal_Heading2')}
      </h4>

      <p className="text-sm text-gray-500 dark:text-gray-300">
        [1] {t('AboutModal/AboutModal_Description2_ShuwardleRepository')}:{' '}
        <a
          className="underline font-bold"
          href="https://github.com/GenbuHase/Shuwardle"
          target="_blank"
          rel="noreferrer"
        >
          Shuwardle
        </a>
        <br />
        [2] {t('AboutModal/AboutModal_Description2_Dictionary')}:{' '}
        <a
          className="underline font-bold"
          href="https://ccd.ninjal.ac.jp/unidic/"
          target="_blank"
          rel="noreferrer"
        >
          現代書き言葉 UniDic 3.1.0(The UniDic Consortium, 2021)
        </a>
        <br />
        [3] {t('AboutModal/AboutModal_Description2_Fingerspelling')}:{' '}
        <a
          className="underline font-bold"
          href="https://www.illust-box.jp/sozai/101472/"
          target="_blank"
          rel="noreferrer"
        >
          手話 指文字 一覧 セット(K-factory, 2022)
        </a>
      </p>
    </BaseModal>
  )
}
