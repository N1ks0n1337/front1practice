// Импортируем React-хуки и компоненты из Ant Design
import { useState, useEffect } from 'react'
import { Card, Button } from 'antd'

// Компонент, который показывает цветной блок и кнопку для его смены
export default function ColorBox() {
    // useState: сохраняем текущее значение цвета в формате HEX
    // Инициализируем случайным цветом при первом рендере
    const [color, setColor] = useState(
        '#' +
        Math.floor(Math.random() * 0xffffff) // случайное число от 0 до 0xFFFFFF
            .toString(16)                     // переводим в шестнадцатеричную строку
            .padStart(6, '0')                 // дополняем ведущими нулями до 6 символов
    )

    // useEffect: выполняется после каждого изменения `color`
    useEffect(() => {
        // Обновляем заголовок страницы, чтобы отображать текущий цвет
        document.title = `Цвет: ${color}`

        // Логируем новый цвет в консоль для отладки
        console.log('Новый цвет: ', color)
    }, [color]) // <- хук зависит от `color`: срабатывает только когда `color` меняется

    // Функция-обработчик нажатия на кнопку: генерит новый случайный цвет
    const changeColor = () => {
        const newColor =
            '#' +
            Math.floor(Math.random() * 0xffffff)
                .toString(16)
                .padStart(6, '0')
        // Обновляем состояние — это вызовет повторный рендер и useEffect
        setColor(newColor)
    }

    // JSX-разметка компонента
    return (
        <Card
            // Стили для карточки: фон — текущий цвет, белый текст, плавное изменение цвета
            style={{
                backgroundColor: color,
                color: '#fff',
                textAlign: 'center',
                transition: 'background-color 0.5s',
            }}
        >
            {/* Показываем текущий цвет */}
            <p>
                Текущий цвет: <strong>{color}</strong>
            </p>
            {/* Кнопка для смены цвета */}
            <Button type="primary" onClick={changeColor}>
                Сменить цвет
            </Button>
        </Card>
    )
}
