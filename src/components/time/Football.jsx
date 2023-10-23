import React from 'react'

import Vitoria from '../../assets/imgs/vitoria.png'
import Field from '../../assets/imgs/field.png'

import Arcanjo from '../../assets/imgs/players/arcanjo-gol.jpg'
import Camutanga from '../../assets/imgs/players/camutanga-zag.jpg'
import Joao from '../../assets/imgs/players/joao-zag.jpg'
import Raiam from '../../assets/imgs/players/raiam-lat.jpg'

import Matheus from '../../assets/imgs/players/matheus-meia.jpg'
import Trindade from '../../assets/imgs/players/trindade-meia.jpg'
import Nem from '../../assets/imgs/players/nem-atac.jpg'
import Gamalho from '../../assets/imgs/players/gamalho-atac.jpg'

const Football = () => {
  const buttons = [
    { imgSrc: Gamalho },
    { imgSrc: Nem },
    { imgSrc: Joao },
    { imgSrc: Raiam },
    { imgSrc: Matheus },
    { imgSrc: Trindade },
    { imgSrc: Camutanga },
    { imgSrc: Arcanjo },
  ]

  const nome = [
    'Gamalho', 'Welligton Nem', 'Joao', 'Raiam',
    'Matheus', 'Trindade', 'Camutanga', 'Arcanjo',
  ]

  const handleButtonClick = (index) => {
    const imgs = document.querySelectorAll('.football ul img'),
          arrayImgs = [...imgs]
  
    arrayImgs[index].classList.add('active')
  
    const allActive = arrayImgs.every(img => img.classList.contains('active'))
  
    if (allActive) 
      document.querySelector('.parabens').classList.add('active')
  }
  

  return (
    <section className='football'>
      <div>
        <img src={Field} alt="campo-futebol" className='field' />

        <ul>
          {buttons.map((button, index) => (
            <button
              key={index}
              onClick={() => handleButtonClick(index)}
            >
              <img src={button.imgSrc} alt="jogador" />
              <p>+</p>
            </button>
          ))}
        </ul>
      </div>

      <article>
        {buttons.map((button, index) => (
          <li 
            key={index} 
            onClick={() => handleButtonClick(index)}>

            <img src={Vitoria} alt='time' />
            <img src={button.imgSrc} alt="jogador" className='jogador'/>
            <h1>{nome[index]}</h1>
          </li>
        ))}
      </article>
    </section>
  )
}

export default Football
