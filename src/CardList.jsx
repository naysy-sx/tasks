import React from 'react';
import Card from './Card';

function CardList({ cards, onCardDelete, onCardChange, onCompleteTask }) {
  return (
    <section className="Todo-list">
      <table>
        <thead>
          <tr>
            <th>Изображение</th>
            <th>Готовность</th>
            <th>Задание</th>
            <th>Категории</th>
            <th>Дата</th>
            <th>Действия</th>
          </tr>
        </thead>
        {cards.map((card) => (
          <Card
            key={card.id}
            id={card.id}
            title={card.title}
            checked={card.checked}
            description={card.description}
            categories={card.categories}
            image={card.image}
            date={card.date}
            onCardDelete={onCardDelete}
            onCardChange={onCardChange}
            onCompleteTask={onCompleteTask}
          />
        ))}
      </table>
    </section>
  );
}

export default CardList;
