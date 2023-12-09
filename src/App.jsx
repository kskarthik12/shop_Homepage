import React,{useState} from 'react'
import Navbar from './components/Navbar'
import Card from './components/Card'
import footer from './components/footer'
import gta5 from './assets/GTA5.jpeg'
import COD from './assets/COD.jpeg'
import RDR2 from './assets/RDR2.jpeg'
import FIFA from './assets/fifa.jpeg'
import Forza from './assets/forza.jpeg'
import Hogwarts from './assets/hogwarts.jpeg'
import WWE from './assets/wwe.jpeg'
import cyber from './assets/cyberpunk.jpeg'

function App() {
  let [cart,setCart] = useState(0)
  let product = [
    {
      name:"GTA 5",
      price:29.99 ,
      image:gta5
    },
    {
      name:"Call of Duty®: Warzone™",
      price:0,
      image:COD
    },
    {
      name:"Red Dead Redemption 2",
      price:59.99,
      image:RDR2
    },
    {
      name:"Hogwarts Legacy",
      price:35.99,
      image:Hogwarts
    },
    {
      name:"Forza Horizon 5 Standard Edition",
      price:41.91,
      image:Forza
    },
    {
      name:"FIFA 22",
      price:29.99,
      image:FIFA
    },
    {
      name:"WWE 2K23",
      price:59.99,
      image:WWE
    },
    {
      name:"Cyberpunk 2077",
      price:49.99,
      image:cyber
    }
  ]
  return <>
    <Navbar cart={cart} setCart={setCart}/>
    <section className="py-5">
      <div className="container px-4 px-lg-5 mt-5">
          <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
              {
                product.map((e,i)=>{
                  return <Card cart={cart} setCart={setCart} product={e} />
                })
              }
              
          </div>
        </div>
    </section>
    <footer/>
  </>
}

export default App