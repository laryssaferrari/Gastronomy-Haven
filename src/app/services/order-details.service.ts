import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderDetailsService {

  constructor() { }

  foodDetails = [
    {
      id:1,
      foodName:"Sanduíche Natural De Frango",
      foodDetails:"Frango | Cenoura | Tomate | Alface",
      foodPrice:15,
      foodImg:"https://specialepaes.com/wp-content/uploads/2021/10/blog-speciale-receita.png"
    },
    {
      id:2,
      foodName:"Pizza De Frango & Vegetais",
      foodDetails:"Frango | Tomate Cereja | Rúcula | Cogumelo | Queijo ",
      foodPrice:35,
      foodImg:"https://www.hojetemfrango.com.br/wp-content/uploads/2019/03/shutterstock_553403317.jpg"
    },
    {
      id:3,
      foodName:"Hambúrguer",
      foodDetails:"Carne | Queijo | Tomate | Alface",
      foodPrice:28,
      foodImg:"https://assets.epicurious.com/photos/57c5c6d9cf9e9ad43de2d96e/master/pass/the-ultimate-hamburger.jpg"
    },
    {
      id:4,
      foodName:"Enroladinho De Frango & Vegetais",
      foodDetails:"Frango | Mix de Legumes | Beringela | Tomate",
      foodPrice:24,
      foodImg:"https://www.hojetemfrango.com.br/wp-content/uploads/2019/01/shutterstock_85927909.jpg"
    },
    {
      id:5,
      foodName:"Ovo De Colher",
      foodDetails:"Ovo de chocolate ao leite com recheio de brigadeiro",
      foodPrice:25,
      foodImg:"https://media.gazetadopovo.com.br/bomgourmet/2017/03/ovos-de-pscoa-la-10-670-1-3c61b2e0.jpg"
    },
    {
      id:6,
      foodName:"Sorvete Italiano",
      foodDetails:"Cereja | Blueberry | Morango | Pistache | Nozes",
      foodPrice:5,
      foodImg:"https://mercadoeconsumo.com.br/wp-content/uploads/2019/08/Enfim-o-brasileiro-se-rendeu-aos-gelatos-italianos.jpg"
    }
  ]
}
