import { screen } from '@testing-library/react'
import { Sidebar } from 'widgets/Sidebar'
import { renderWithTranslations } from 'shared/lib/tests/renderWithTranslations/renderWithTranslations'

describe('test sidebar', function () {
    test('with only params', () => {
        renderWithTranslations(<Sidebar />)
        expect(screen.getByTestId('Text')).toBeInTheDocument()
    })
})
