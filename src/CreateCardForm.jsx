import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid'; // Импортируем функцию для генерации UUID



function CreateCardForm({ onCardSubmit }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [categories, setCategories] = useState([]);
  const [image, setImage] = useState('');
  const [checked, setChecked] = useState(false);

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleCategoriesChange = (event) => {
    const selectedCategories = Array.from(event.target.selectedOptions, (option) => option.value);
    setCategories(selectedCategories);
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setImage(reader.result);
    };

    if (file) {
      reader.readAsDataURL(file);
    } else {
      setImage('');
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newCard = {
      id: uuidv4(), // Генерируем уникальный идентификатор
      title,
      description,
      categories,
      image,
      checked,
      date: new Date().toISOString()
    };

    onCardSubmit(newCard);
    setTitle('');
    setDescription('');
    setCategories([]);
    setImage('');
  };


  return (
    <form onSubmit={handleSubmit} className="create-card-form">
      <strong>Добавить задание</strong>
      <div>
        <label htmlFor="title">Название:</label>
        <input 
          type="text" 
          id="title" 
          value={title} 
          onChange={handleTitleChange} 
          className='lkjl'
          required
        />
      </div>
      <div>
        <label htmlFor="description">Описание:</label>
        <textarea 
          id="description" 
          value={description} 
          onChange={handleDescriptionChange} 
          required
        />
      </div>
      <div>
        <label htmlFor="categories">Категории:</label>
        <select 
          id="categories" 
          multiple value={categories} 
          onChange={handleCategoriesChange}
          required
        >
          <option value="Здоровье">Здоровье</option>
          <option value="Образование">Образование</option>
          <option value="Работа">Работа</option>
          <option value="Отношения">Отношения</option>
          <option value="Материалы">Материалы</option>
          <option value="Инструменты">Инструменты</option>
          <option value="Отдых">Отдых</option>
        </select>
      </div>
      <div>
        <label htmlFor="image">Изображение:</label>
        <input type="file" id="image" onChange={handleImageChange} />
      </div>
      <button type="submit">Создать</button>
    </form>
  );
}

export default CreateCardForm;
