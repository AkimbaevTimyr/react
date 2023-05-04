import { classNames } from './classNames'

describe('classNames', function () {
    test('with only first params', () => {
        expect(classNames('someClass')).toBe('someClass')
    })

    test('with additional params', () => {
        expect(classNames('someClass', {}, ['class1', 'class2']))
            .toBe('someClass class1 class2')
    })

    test('with additional params', () => {
        expect(classNames('someClass'.trim(),
            { hovered: true, visible: true },
            ['class1', 'class2'])
        )
            .toBe('someClass hovered visible class1 class2')
    })

    test('with mods false', () => {
        expect(classNames('someClass'.trim(),
            { hovered: true, visible: false },
            ['class1', 'class2'])
        )
            .toBe('someClass hovered class1 class2')
    })
})
