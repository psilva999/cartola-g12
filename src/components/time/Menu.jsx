import Vitoria from '../../assets/imgs/vitoria.png'

import Tatica from '../../assets/svg/tatica.svg?react'

const Menu = () => {
  return (
    <section className='menu-players'>
      <article>
        <img src={ Vitoria }/>
        <span>Meu Time</span>
      </article>

      <article>
        <h1>2 - 3 - 2 <Tatica/></h1>
        <h2>$ 100</h2>
      </article>
    </section>
  )
}

export default Menu