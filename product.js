new Vue({
    el: '#app',
    vuetify: new Vuetify(),
    data(){
        return {
            cart: 0,
            show:false,
            overlay: false,
            items: [
                { title: 'Lamp' },
                { title: 'Chair' },
                { title: 'Sofa' },
                { title: 'Table' },
              ],
            products: [
                {
                    imgs:[
                        {src:'img/7.jpg'},
                        {src:'img/8.jpg'},
                        {src:'img/9.jpg'},
                        {src:'img/10.jpg'},
                        {src:'img/11.jpg'},
                    ],
                    title: 'A chair with four pillows four pillows',
                    value: 5,
                    sell:'270',
                    price:'$150',
                    desc:'Lorem ipsum dolor sit, amet consectetur adicing elit. Tenetur excepturi fuga labore sit debitis nostrum.',
                    order:'Order Now',
                    cart:'Add to Cart'
                },
                {
                    imgs:[
                        {src:'img/7.jpg'},
                        {src:'img/8.jpg'},
                        {src:'img/9.jpg'},
                        {src:'img/10.jpg'},
                        {src:'img/11.jpg'},
                    ],
                    title: 'A chair with four pillows four pillows',
                    value: 3.5,
                    sell:'270',
                    price:'$150',
                    desc:'Lorem ipsum dolor sit, amet consectetur adicing elit. Tenetur excepturi fuga labore sit debitis nostrum.',
                    order:'Order Now',
                    cart:'Add to Cart'
                },
                {
                    imgs:[
                        {src:'img/7.jpg'},
                        {src:'img/8.jpg'},
                        {src:'img/9.jpg'},
                        {src:'img/10.jpg'},
                        {src:'img/11.jpg'},
                    ],
                    title: 'A chair with four pillows four pillows',
                    value: 1.5,
                    sell:'270',
                    price:'$150',
                    desc:'Lorem ipsum dolor sit, amet consectetur adicing elit. Tenetur excepturi fuga labore sit debitis nostrum.',
                    order:'Order Now',
                    cart:'Add to Cart'
                },
                {
                    imgs:[
                        {src:'img/7.jpg'},
                        {src:'img/8.jpg'},
                        {src:'img/9.jpg'},
                        {src:'img/10.jpg'},
                        {src:'img/11.jpg'},
                    ],
                    title: 'A chair with four pillows four pillows',
                    value: 4.5,
                    sell:'270',
                    price:'$150',
                    desc:'Lorem ipsum dolor sit, amet consectetur adicing elit. Tenetur excepturi fuga labore sit debitis nostrum.',
                    order:'Order Now',
                    cart:'Add to Cart'
                },
            ],

        }
    },
    methods:{
        detail(){
            alert("Detail akan dibuat")
        }
    }
  })
