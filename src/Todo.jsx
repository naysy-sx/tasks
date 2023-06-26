import { useState } from 'react'
import CardList from './CardList';
import CreateCardForm from './CreateCardForm';

function Todo() {
  const [cards, setCards] = useState([]);

  const handleCardSubmit = (newCard) => {
    setCards((prevCards) => [...prevCards, newCard]);
  };

  const onCardDelete = (id) => {
    const newCards = cards.filter((obj) => obj.id !== id);
    setCards(newCards);
  };

  const onCardChange = (id, formData) => {
    const updatedCards = cards.map((card) => {
      if (card.id === id) {
        return { ...card, title: formData.title, description: formData.description };
      }
      return card;
    });
    setCards(updatedCards);
  };

  const onCompleteTask = (id, checked) => {
    const updatedCards = cards.map((card) => {
      if (card.id === id) {
        return { ...card, checked };
      }
      return card;
    });
    setCards(updatedCards);
  };

  return (
    <div className="Todo">
      <header className="Todo-header">
        <h1 className="Todo-title">Список задач</h1>
      </header>
      <main className="Main">
        <aside className="MainAside">
          <CreateCardForm onCardSubmit={handleCardSubmit} />
        </aside>
        <CardList
          cards={cards}
          onCardDelete={onCardDelete}
          onCardChange={onCardChange}
          onCompleteTask={onCompleteTask}
        />
      </main>
    </div>
  );
}

export default Todo;
