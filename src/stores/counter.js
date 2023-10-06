import { ref } from 'vue';
import { defineStore } from 'pinia'

export const menuStore = defineStore('menu', () => {

  const menu = ref([
    { name: 'KitKat', img: 'https://media.allonline.7eleven.co.th/pdmain/419941-01-Wafers-Cakes-Pies-Kitkat-import-v3.jpg', price: 25 },
    { name: 'SNICKERS', img: 'https://fit-d.com/uploads/food/55c0d7c551398abc29fcfc7cedaeb3cb.jpg', price: 30 },
    { name: 'HERSHEYS ', img: 'https://www.jiomart.com/images/product/original/491587083/hershey-s-whole-almond-bar-40-g-product-images-o491587083-p590120452-0-202203150928.jpg?im=Resize=(420,420)', price: 35 },
    { name: 'Chocolate M&M ', img: 'https://media.allonline.7eleven.co.th/pdmain/410187-00-Chocolate-mandm-v1.jpg', price: 20 },
    { name: 'Cake Chocolate ', img: 'https://tatyanaseverydayfood.com/wp-content/uploads/2022/03/The-Best-Dark-Chocolate-Cake-Recipe-3-500x500.jpg', price: 300 },
    { name: 'Chocolate Milk ', img: 'https://images.heb.com/is/image/HEBGrocery/prd-medium/000325152.jpg', price: 45 },


  ]);
  
  
  return { menu}
})
export const useCartStore = defineStore({
  id: 'cart',
  state: () => ({
    cartList: [], 
    orderList:[],
  }),
  actions: {
    addToCart(item) {
      this.cartList.push(item);
    },
    addOrderList() {
      // เพิ่มค่าลงไปใน orderList
      this.orderList.push(...this.cartList);
    
     this.cartList = [];
    },

  },
});
