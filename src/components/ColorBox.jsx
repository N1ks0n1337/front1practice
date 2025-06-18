import { useState, useEffect } from 'react';
import { Card, Button } from 'antd';

export default function ColorBox() {
    const [color, setColor] = useState(
        '#' + Math.floor(Math.random() * 0xffffff).toString(16).padStart(6, '0')
    );

    useEffect(() => {
        document.title = `Цвет: ${color}`;
        console.log('Новый цвет: ', color);
    }, [color]) // <-- зависимость: эффект будет выполняться при изменении color

    const changeColor = () => {
        const newColor = '#' + Math.floor(Math.random() * 0xffffff).toString(16).padStart(6, '0');
        setColor(newColor);
    }

    return (
        <Card
            style={{
                backgroundColor: color,
                color: '#fff',
                textAlign: 'center',
                transition: 'background-color 0.5s'
            }}
        >
            <p>Текущий цвет: <strong>{color}</strong></p>
            <Button type='primary' onClick={changeColor}>
                Сменить цвет
            </Button>
        </Card>
    );
}