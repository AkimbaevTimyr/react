import { Button } from 'shared/ui/Button'
import { render, screen } from '@testing-library/react'
import { ThemeButton } from 'shared/ui/Button/ui/Button'

describe('test button', function () {
    test('with only params', () => {
        render(<Button>Add</Button>)
        expect(screen.getByText('Add')).toBeInTheDocument()
    })

    test('test with class', () => {
        render(<Button theme={ThemeButton.CLEAR}>Add</Button>)
        expect(screen.getByText('Add')).toHaveClass('clear')
        screen.debug()
    })
})
