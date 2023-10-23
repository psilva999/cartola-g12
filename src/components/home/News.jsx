import { Link } from "react-router-dom";
import Slide1 from '../../assets/imgs/slide/1.jpg'
import Slide2 from '../../assets/imgs/slide/3.jpg'
import Slide3 from '../../assets/imgs/slide/5.jpg'

const News = () => {
  const titles = [
    {
      className: "first",
      imgSrc: Slide3,
      title: "Cada vez mais líder, Vitória joga em ritmo de campeão",
      description: "Rubro-Negro faz 1 a 0 no Sampaio Corrêa, fora de casa"
    },
    {
      className: "second",
      imgSrc: Slide1,
      title: "ESCALE O ESQUADRÃO DA G12",
      description: "Entre e escolha o seu time para jogar no Cartola da G12"
    },
    {
      className: "last",
      imgSrc: Slide2,
      title: "Vitória garante a maior sequência como líder",
      description: "Rubro-Negro está na primeira posição da série B"
    }
  ];

  return (
    <section className='news'>
      {titles.map((item, index) => (
        <article className={item.className} key={index}>
          <img src={item.imgSrc} alt="news" />
          <div>
            <h1>{item.title}</h1>
            <p>{item.description}</p>
          </div>
        </article>
      ))}
    </section>
  );
}

export default News;
