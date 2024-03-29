import './App.css';
import { useState, useEffect } from 'react';
import Patiekalai from './components/Patiekalai';
import NaujoPatiekaloForma from './components/NaujoPatiekaloForma';
import RedaguojamoPatiekaloForma from './components/RedaguojamoPatiekaloForma';
import Header from './components/Header';

const App = () => {

  const [arRedaguojame, setArRedaguojame] = useState(false);
  const [formInputs, setFormInputs] = useState({
    // pavadinimas:{
    //   value: '',
    //   error: {
    //     isOkay: false,
    //     validation: RegExp(),
    //     message: 'error zinute'
    //   }
    // },
    pavadinimas: '',
    nuotrauka: '',
    kilmesSalis: '',
    ragautas: false,
    ingredientai: '',
    kainaNuo: '',
    kainaIki: ''
  });

  // const [dishes, setDishes] = useState([
  //   {
  //     id: 0,
  //     pavadinimas: 'Kebabas',
  //     nuotrauka: 'https://imageproxy.wolt.com/menu/menu-images/600a7d7d826c1246cf405d26/971ef752-5eeb-11eb-9920-02dc710d0c97_28.kebabu_kebabai_products_3.jpeg',
  //     kilmesSalis: 'Bizantija',
  //     ragautas: true,
  //     ingredientai: ['mėsa', 'padažas', 'daržovės', 'lavašas'],
  //     kaina: {
  //       nuo: 4.5,
  //       iki: 8
  //     }
  //   },{
  //     id: 1,
  //     pavadinimas: 'Pica',
  //     nuotrauka: 'https://www.italianshop.lt/cdn/shop/articles/NZ8_5456_FB_WEB-2.jpg',
  //     kilmesSalis: 'Italija',
  //     ragautas: true,
  //     ingredientai: ['picos padas', 'padažas', 'sūris', 'mėsa'],
  //     kaina: {
  //       nuo: 8,
  //       iki: 16
  //     }
  //   },{
  //     id: 3,
  //     pavadinimas: 'Cepelinai',
  //     nuotrauka: 'https://www.tv3.lt/Uploads/UArticles/leadPhotos/b1/f0/b9/00/b1f0b900ddb3deef12856c8b8abdc64c.jpg',
  //     kilmesSalis: 'Lietuva',
  //     ragautas: true,
  //     ingredientai: ['bulvė', 'mėsa', 'grietinė', 'spirgučiai'],
  //     kaina: {
  //       nuo: 2.5,
  //       iki: 10
  //     }
  //   },{
  //     id: 4,
  //     pavadinimas: 'Sevičė',
  //     nuotrauka: 'https://s1.15min.lt/images/photos/2015/12/22/big/fotolia_64151666_subscription_l-56794c082423b.jpg',
  //     kilmesSalis: 'Peru',
  //     ragautas: false,
  //     ingredientai: ['žalia žuvis', 'daržovės', 'žalia citrina'],
  //     kaina: {
  //       nuo: 10,
  //       iki: 20
  //     }
  //   }
  // ]);

  const [dishes, setDishes] = useState([]);
  
  useEffect(()=>{
    fetch(`http://localhost:8080/dishes`)
      .then(res => res.json())
      .then(data => {
        // console.log('atsisiuntėme duomenis', data);
        setDishes(data);
      });
  }, []);
  
  const keistiPatiekaloStatusa = id => {
    setDishes(dishes.map(dish => {
      if(id === dish.id){
        fetch(`http://localhost:8080/dishes/${id}`, {
          method: "PATCH",
          headers:{
            "Content-Type":"application/json"
          },
          body: JSON.stringify({
            ragautas: !dish.ragautas
          })
        });
        return {
          ...dish,
          ragautas: !dish.ragautas
        }
      } else {
        return dish;
      }
    }));
  }
  const redaguotiPatiekala = redaguotoPatiekaloInfo => {
    // console.log(redaguotoPatiekaloInfo);
    setDishes(dishes.map( dish => {
      if(dish.id === redaguotoPatiekaloInfo.id){
        return redaguotoPatiekaloInfo;
      } else {
        return dish;
      }
    }));
    fetch(`http://localhost:8080/dishes/${redaguotoPatiekaloInfo.id}`,{
      method: "PUT",
      headers:{
        "Content-Type":"application/json"
      },
      body: JSON.stringify(redaguotoPatiekaloInfo)
    });
  }
  const trintiPatiekala = id => {
    setDishes(dishes.filter(dish => dish.id !== id));
    fetch(`http://localhost:8080/dishes/${id}`, {method: "DELETE"});
  }
  const papildytiPatiekluSarasa = naujasPatiekalas => {
    setDishes([ ...dishes, naujasPatiekalas ]);
    fetch(`http://localhost:8080/dishes`, {
      method: "POST",
      headers:{
        "Content-Type":"application/json"
      },
      body: JSON.stringify(naujasPatiekalas)
    });
  }

  return (
    <>
      <Header 
        bendrasKiekis={dishes.length}
        ragautuKiekis={dishes.filter(dish => dish.ragautas).length}
        neragautuKiekis={dishes.filter(dish => !dish.ragautas).length}
      />
      { arRedaguojame ?
        <RedaguojamoPatiekaloForma 
          formInputs={formInputs}
          setFormInputs={setFormInputs}
          setArRedaguojame={setArRedaguojame}
          arRedaguojame={arRedaguojame}
          redaguotiPatiekala={redaguotiPatiekala}
        /> : 
        <NaujoPatiekaloForma
          formInputs={formInputs}
          setFormInputs={setFormInputs}
          addNewDish={papildytiPatiekluSarasa}
        />
      }
      <Patiekalai
        dishes={dishes}
        statusChange={keistiPatiekaloStatusa}
        deleteDish={trintiPatiekala}
        setArRedaguojame={setArRedaguojame}
        setFormInputs={setFormInputs}
      />
    </>
  );
}

export default App;