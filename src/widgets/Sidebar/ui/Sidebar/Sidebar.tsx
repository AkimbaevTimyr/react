import cls from './Sidebar.module.scss'
import { classNames } from 'shared/lib/classNames/classNames'
import React, { useState } from 'react'
import { ThemeSwitcher } from 'widgets/ThemeSwitch'
import { LanguageSwitch } from 'widgets/LanguageSwitch/ui/LanguageSwitch'

interface SidebarProps {
    className?: string
}

export const Sidebar = ({ className }: SidebarProps) => {
    const [collapsed, setCollapsed] = useState(false)

    const onToogle = () => {
        setCollapsed(prev => !prev)
    }

    return (
        <div
            data-testid="sidebar"
            className={classNames(cls.Sidebar,
                { [cls.collapsed]: collapsed },
                [className])}
        >
            <button onClick={onToogle}>TOOGLE</button>
            <div className={cls.switchers}>
                <ThemeSwitcher />
                <LanguageSwitch className={cls.lang} />
            </div>
        </div>
    )
}
