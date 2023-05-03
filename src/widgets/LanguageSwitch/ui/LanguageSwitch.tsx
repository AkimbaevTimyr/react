import { classNames } from 'shared/lib/classNames/classNames'
import { Button } from 'shared/ui/Button'
import { useTranslation } from 'react-i18next'
import { ThemeButton } from 'shared/ui/Button/ui/Button'

interface LanguageSwitchProps {
    className?: string
}

export const LanguageSwitch = ({ className }: LanguageSwitchProps) => {
    const { t, i18n } = useTranslation()

    const toogle = () => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')
    }

    return (
        <Button theme={ThemeButton.CLEAR} className={classNames('', {}, [className])} onClick={toogle}>
            {t('Язык')}
        </Button>
    )
}
