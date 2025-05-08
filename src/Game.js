import React, { useState } from 'react';
import './Game.css';

const images = [
  { name: 'Con _oi', answer: 'V', image: 'elephant.jpg' },
  { name: 'Con _ẹt', answer: 'V', image: 'parrot.jpg' },
  { name: 'Cú _ọ', answer: 'V', image: 'owl.jpg' },
  { name: '_ú sữa', answer: 'V', image: 'milky-fruit.jpg' },
  { name: '_ali', answer: 'V', image: 'suitcase.jpg' },
  { name: 'Đường _ay', answer: 'R', image: 'railroad.jpg' },
  { name: '_òng rọc', answer: 'R', image: 'pulley.jpg' }
];

const Game = () => {
  const [droppedLetters, setDroppedLetters] = useState({});

  const handleDrop = (e, imageName) => {
    const letter = e.dataTransfer.getData('text');
    const correctAnswer = images.find(img => img.name === imageName).answer;
    if (letter === correctAnswer) {
      setDroppedLetters({ ...droppedLetters, [imageName]: letter });
    }
  };

  const handleDragStart = (e, letter) => {
    e.dataTransfer.setData('text', letter);
  };

  const resetGame = () => {
    setDroppedLetters({});
  };

  const letters = ['V', 'R', 'A', 'B', 'C', 'D', 'E', 'F'];

  return (
    <div className="game-container">
      <div className="images-container">
        {images.map((img, index) => (
          <div key={index} className="image-card">
            <img src={`images/${img.image}`} alt={img.name} />
            <div className="name" onDrop={(e) => handleDrop(e, img.name)} onDragOver={(e) => e.preventDefault()}>
              {img.name.replace('_', droppedLetters[img.name] || '_')}
            </div>
          </div>
        ))}
      </div>
      <div className="letters-container">
        {letters.map((letter, index) => (
          <div key={index} className="letter" draggable onDragStart={(e) => handleDragStart(e, letter)}>
            {letter}
          </div>
        ))}
      </div>
      <button className="reset-button" onClick={resetGame}>Reset</button>
    </div>
  );
};

export default Game;
