import React, { useState } from 'react';

function Card({
  id,
  title: initialTitle,
  description: initialDescription,
  categories,
  image,
  date,
  checked,
  onCardDelete,
  onCardChange,
  onCompleteTask,
}) {
  const [formData, setFormData] = useState({ title: initialTitle, description: initialDescription });
  const [isEditing, setIsEditing] = useState(false);

  const onChange = () => {
    if (isEditing) {
      setFormData({ title: initialTitle, description: initialDescription });
    }
    setIsEditing(!isEditing);
  };

  const onSave = () => {
    onCardChange(id, formData);
    setIsEditing(false);
  };

  return (
    <tr className="Todo-item" className={checked ? 'Todo-card success' : 'Todo-card'}>

        {isEditing ? (
          <td colspan="6">
            <form>
              <fieldset>
                <legend>Название задачи</legend>
                <input
                  type="text"
                  placeholder="Заголовок"
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                />
              </fieldset>
              <fieldset>
                <legend>Описание</legend>
                <textarea
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  ></textarea>
              </fieldset>
              <button type="button" onClick={onSave}>
                Сохранить изменение
              </button>
            </form>            
          </td>
        ) : (
          <>
            <td>
              <img src={image} alt={initialTitle} className="Todo-card-image" />
            </td>
            <td>
              <input
                type="checkbox"
                checked={checked}
                onChange={(e) => onCompleteTask(id, e.target.checked)}
              />              
            </td>
            <td className="Todo-item-content">
              <details>
                <summary>
                  <strong>{initialTitle}</strong>
                </summary>
                <p>{initialDescription}</p>
              </details>  
            </td>
            <td>

                <ul className="Todo-card-categories">
                {categories.map((category) => (
                  <li key={category}>{category}</li>
                ))}
                </ul>

            </td>
            <td>{date}</td>
            <td>
              <button onClick={onChange}>{isEditing ? 'Отмена' : 'Изменить'}</button>
              <button onClick={() => onCardDelete(id)}>Удалить</button>
            </td>
          </>
        )}

    </tr>
  );
}

export default Card;
