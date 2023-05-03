import cls from './ThemeSwitcher.module.scss'
import { classNames } from 'shared/lib/classNames/classNames'
import { type FC } from 'react'
import DarkIcon from 'shared/assets/theme-dark.svg'
import LightIcon from 'shared/assets/theme-light.svg'
import { Theme, useTheme } from 'app/providers/ThemeProvider'
import { Button } from 'shared/ui/Button'
import { ThemeButton } from 'shared/ui/Button/ui/Button'

interface ThemeSwitcherProps {
    className?: string
}

export const ThemeSwitcher: FC<ThemeSwitcherProps> = (props) => {
    const {
        className
    } = props

    const { theme, toogleTheme } = useTheme()

    return (
        <Button
            onClick={toogleTheme}
            className={classNames(cls.ThemeSwitcher, {}, [className])}
            theme={ThemeButton.CLEAR}
        >
            {
                theme === Theme.LIGHT ? <LightIcon /> : <DarkIcon />
            }
        </Button>
    )
}
