import cls from './Error.module.scss'
import { classNames } from 'shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'
import { Button } from 'shared/ui/Button'

interface ErrorProps {
    className?: string
}

export const Error = ({ className }: ErrorProps) => {
    const { t } = useTranslation()

    const reload = () => {
        location.reload()
    }

    return (
        <div className={classNames(cls.Error, {}, [className])}>
            {t('Что-то пошло не так ')}
            <Button onClick={reload}>
                {t('Перезагрузить страницу')}
            </Button>
        </div>
    )
}
