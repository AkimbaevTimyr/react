
// в модах будет приходить обьект со значением class : false | true
type Mods = Record<string, boolean | string>

export function classNames (cls: string, mods?: Mods, additional?: string[]) {
    // берем класс , доп классы вставляем в массив , берем моды проходимся по ним - проверяем значение на булеан ,
    // если тру то берем класс и вовзращаем его в массив
    return [
        cls,
        ...additional.filter(Boolean),
        Object.entries(mods)
            .filter(([className, value]) => Boolean(value))
            .map(([className]) => className)
    ].join(' ')
}
