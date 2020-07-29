new Vue({
    el: '#app',
    vuetify: new Vuetify(),
    data(){
        return {
            show:false,
            overlay: false,
            carts: [],
            items: [
                { title: 'Lamp' },
                { title: 'Chair' },
                { title: 'Sofa' },
                { title: 'Table' },
              ],
            products: [
                {
                    id: 1,
                    imgs:[
                        {src:'img/9.jpg'},
                        {src:'img/8.jpg'},
                    ],
                    title: 'work desk for computer or laptop',
                    value: 5,
                    sell:'390',
                    price:'$450',
                    desc:'Lorem ipsum dolor sit, amet consectetur adicing elit. Tenetur excepturi fuga labore sit debitis nostrum.',
                    order:'Order Now',
                    cart:'Add to Cart',
                    brand: 'ikea',
                    region: 'Swiss'
                },
                {
                    id: 2,
                    imgs:[
                        {src:'img/10.jpg'},
                        {src:'img/8.jpg'},
                    ],
                    title: 'A chair with four pillows four pillows',
                    value: 3.5,
                    sell:'120',
                    price:'$150',
                    desc:'Lorem ipsum dolor sit, amet consectetur adicing elit. Tenetur excepturi fuga labore sit debitis nostrum.',
                    order:'Order Now',
                    cart:'Add to Cart',
                    brand: 'Bekant',
                    region: 'US'
                },
                {
                    id: 3,
                    imgs:[
                        {src:'img/8.jpg'},
                        {src:'img/5.jpg'},
                    ],
                    title: 'relaxing sofa for in the family room',
                    value: 1.5,
                    sell:'170',
                    price:'$320',
                    desc:'Lorem ipsum dolor sit, amet consectetur adicing elit. Tenetur excepturi fuga labore sit debitis nostrum.',
                    order:'Order Now',
                    cart:'Add to Cart',
                    brand: 'ikea',
                    region: 'Swiss'
                },
                {
                    id: 4,
                    imgs:[
                        {src:'img/7.jpg'},
                        {src:'img/8.jpg'},
                    ],
                    title: 'flower vase for a more comfortable room',
                    value: 4.5,
                    sell:'320',
                    price:'$250',
                    desc:'Lorem ipsum dolor sit, amet consectetur adicing elit. Tenetur excepturi fuga labore sit debitis nostrum.',
                    order:'Order Now',
                    cart:'Add to Cart',
                    brand: 'Olympic',
                    region: 'Japan'
                },
            ],
        }
    },
    methods:{
        // memasukan data ke dalam array cart
        addToCart(product){
            this.carts.push(product)
        },
        isInCart(){
            if(this.carts.length === 0){
                alert("Cart Masih Kosong !!")
            }
        }
    }
  })