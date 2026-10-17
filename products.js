// Товары. Фото лежат в папке img. Чтобы добавить товар, скопируйте любой блок и поменяйте данные.
const PRODUCTS = [
 {
  "id": "maison-margiela-gats",
  "cat": "new",
  "title": "Maison Margiela Gats",
  "sub": "",
  "price": "330$",
  "old": null,
  "cover": "img/mm/s-l1600.jpg",
  "photos": [
   "img/mm/s-l1600.jpg",
   "img/mm/s-l1600-2.jpg",
   "img/mm/s-l1600-3.jpg"
  ],
  "desc": "Кеды от Maison Margiela, состояние идеальное, по поводу размера и наличия пиши в Инсту @mnsureee!"
 },
 {
  "id": "cdg",
  "cat": "new",
  "title": "Comme des Garcons",
  "sub": "",
  "price": "250$",
  "old": null,
  "cover": "img/cdg/s-l1600-4.jpg",
  "photos": [
   "img/cdg/s-l1600-4.jpg",
   "img/cdg/s-l1600-5.jpg",
   "img/cdg/s-l1600-6.jpg"
  ],
  "desc": "Классика от Comme des Garcons.  размер M–L. Состояние отличное. По поводу размера и наличия пиши в Инсту @mnsureee!"
 },
 {
  "id": "number-nine-tshirt",
  "cat": "new",
  "title": "Number Nine Tshirt",
  "sub": "",
  "price": "150$",
  "old": null,
  "cover": "img/nn/s-l1600-7.jpg",
  "photos": [
   "img/nn/s-l1600-7.jpg",
   "img/nn/s-l1600-8.jpg",
   "img/nn/s-l1600-9.jpg"
  ],
  "desc": "Редкая Number (N)ine футболка. Состояние 10/10, размер M. Оригинал. По поводу размера и наличия пиши в Инсту @mnsureee!"
 },
 {
  "id": "givenchy-shark-hoodie",
  "cat": "hoodies",
  "title": "Givenchy Shark hoodie",
  "sub": "",
  "price": "450$",
  "old": null,
  "cover": "img/fotki/12098321-BLACK-febd3e30-.jpg",
  "photos": [
   "img/fotki/12098321-BLACK-febd3e30-.jpg",
   "img/gv/s-l1600-10.jpg",
   "img/gv/s-l1600-11.jpg"
  ],
  "desc": "Givenchy Shark Logo худи., чёрный цвет, размер XS. Состояние огонь. По поводу размера и наличия пиши в Инсту @mnsureee!"
 },
 {
  "id": "blindfl",
  "cat": "hoodies",
  "title": "Gucci Hoodie",
  "sub": "",
  "price": "350$",
  "old": null,
  "cover": "img/guc/s-l1600-12.jpg",
  "photos": [
   "img/guc/s-l1600-12.jpg",
   "img/guc/s-l1600-13.jpg",
   "img/guc/s-l1600-14.jpg"
  ],
  "desc": "Gucci худи, оригинал. Чёрный/серый, размер S. Состояние отличное. По поводу размера и наличия пиши в Инсту @mnsureee!"
 },
 {
  "id": "acne-studios",
  "cat": "hoodies",
  "title": "Acne Studios",
  "sub": "",
  "price": "100$",
  "old": null,
  "cover": "img/acne/s-l1600-15.jpg",
  "photos": [
   "img/acne/s-l1600-15.jpg",
   "img/acne/s-l1600-16.jpg",
   "img/acne/s-l1600-17.jpg"
  ],
  "desc": "Acne Studios свитшот. Минималистичный дизайн, состояние 9/10. Размер M. По поводу размера и наличия пиши в Инсту @mnsureee!"
 },
 {
  "id": "HBA",
  "cat": "hoodies",
  "title": "HOODBYAIR",
  "sub": "",
  "price": "400$",
  "old": null,
  "cover": "img/acne/s-l1600-27.jpg",
  "photos": [
   "img/acne/s-l1600-27.jpg",
   "img/acne/s-l1600-28.jpg"
  ],
  "desc": "Hood By Air  состояние 9/10. Размер L. По поводу размера и наличия пиши в Инсту @mnsureee!"
 },
 {
  "id": "bberry",
  "cat": "hoodies",
  "title": "Burberry",
  "sub": "",
  "price": "150$",
  "old": null,
  "cover": "img/acne/s-l1600-29.jpg",
  "photos": [
   "img/acne/s-l1600-29.jpg",
   "img/acne/s-l1600-30.jpg",
   "img/acne/s-l1600-31.jpg"
  ],
  "desc": "Burberry худи. Классика, состояние отличное. Размер M–L. По поводу размера и наличия пиши в Инсту @mnsureee!"
 },
 {
  "id": "ralphh",
  "cat": "hoodies",
  "title": "Ralph Lauren hoodie",
  "sub": "",
  "price": "125$",
  "old": null,
  "cover": "img/acne/s-l1600-32.jpg",
  "photos": [
   "img/acne/s-l1600-32.jpg",
   "img/acne/s-l1600-33.jpg",
   "img/acne/s-l1600-34.jpg"
  ],
  "desc": "Ralph Lauren худи. Классический стиль, состояние отличное. Размер XL. По поводу размера и наличия пиши в Инсту @mnsureee!"
 },
 {
  "id": "dior-homme-jeans",
  "cat": "jeans",
  "title": "Dior Homme AW 2004 jeans",
  "sub": "Темносиний, 28",
  "price": "700$",
  "old": null,
  "cover": "img/jeans/s-l1600-18.jpg",
  "photos": [
   "img/jeans/s-l1600-18.jpg",
   "img/jeans/s-l1600-19.jpg",
   "img/jeans/s-l1600-20.jpg"
  ],
  "desc": "Легендарные Dior Homme джинсы Hedi Slimane 2004.  размер 28. Состояние 9/10. По поводу размера и наличия пиши в Инсту @mnsureee!"
 },
 {
  "id": "rick-owens-jeans",
  "cat": "jeans",
  "title": "Rick Owens AA 2001 jeans",
  "sub": "Черный, 33",
  "price": "2200$",
  "old": null,
  "cover": "img/jeans/s-l1600-21.jpg",
  "photos": [
   "img/jeans/s-l1600-21.jpg",
   "img/jeans/s-l1600-22.jpg",
   "img/jeans/s-l1600-23.jpg"
  ],
  "desc": "Rick Owens джинсы 2001. Чёрный, размер 33. Оригинал, состояние огонь. По поводу размера и наличия пиши в Инсту @mnsureee!"
 },
 {
  "id": "ax",
  "cat": "jeans",
  "title": "Armani Exchange jeans",
  "sub": "Черный, 33",
  "price": "400$",
  "old": null,
  "cover": "img/jeans/s-l1600-24.jpg",
  "photos": [
   "img/jeans/s-l1600-24.jpg",
   "img/jeans/s-l1600-25.jpg",
   "img/jeans/s-l1600-26.jpg"
  ],
  "desc": "Armani Exchange джинсы. Современный крой, состояние 9/10. Размер 32–34. По поводу размера и наличия пиши в Инсту @mnsureee!"
 },
 {
  "id": "saint-laurent-shoes",
  "cat": "footwear",
  "title": "Saint Laurent",
  "sub": "",
  "price": "200$",
  "old": null,
  "cover": "img/shoes/s-l1600-35.jpg",
  "photos": [
   "img/shoes/s-l1600-35.jpg",
   "img/shoes/s-l1600-36.jpg",
   "img/shoes/s-l1600-37.jpg"
  ],
  "desc": "Saint Laurent . Чёрная кожа, размер 42–43. Состояние 9/10. По поводу размера и наличия пиши в Инсту @mnsureee!"
 },
 {
  "id": "nike-airforce-high",
  "cat": "footwear",
  "title": "Nike Airforce 07 high",
  "sub": "",
  "price": "150$",
  "old": null,
  "cover": "img/shoes/s-l1600-38.jpg",
  "photos": [
   "img/shoes/s-l1600-38.jpg",
   "img/shoes/s-l1600-39.jpg",
   "img/shoes/s-l1600-40.jpg"
  ],
  "desc": "Nike Air Force 1 '07 High. Белый, размер 41–42. Состояние отличное. По поводу размера и наличия пиши в Инсту @mnsureee!"
 },
 {
  "id": "giuseppe-zanotti-kid-cudi",
  "cat": "footwear",
  "title": "Kid Cudi x Giuseppe Zanotti",
  "sub": "",
  "price": "1200$",
  "old": null,
  "cover": "img/shoes/s-l1600-41.jpg",
  "photos": [
   "img/shoes/s-l1600-41.jpg",
   "img/shoes/s-l1600-42.jpg",
   "img/shoes/s-l1600-43.jpg"
  ],
  "desc": "Коллаб Kid Cudi x Giuseppe Zanotti. Чёрные high-top, размер 42. Редкая вещь. По поводу размера и наличия пиши в Инсту @mnsureee!"
 },
 {
  "id": "ralph-lauren-shoes",
  "cat": "footwear",
  "title": "Ralph Lauren",
  "sub": "",
  "price": "120$",
  "old": null,
  "cover": "img/shoes/s-l1600-44.jpg",
  "photos": [
   "img/shoes/s-l1600-44.jpg",
   "img/shoes/s-l1600-45.jpg",
   "img/shoes/s-l1600-46.jpg"
  ],
  "desc": "Ralph Lauren тапки, состояние 9/10. Размер 41. По поводу размера и наличия пиши в Инсту @mnsureee!"
 },
 {
  "id": "gucci-slippers",
  "cat": "footwear",
  "title": "Gucci Slippers",
  "sub": "",
  "price": "220$",
  "old": null,
  "cover": "img/shoes/s-l1600-47.jpg",
  "photos": [
   "img/shoes/s-l1600-47.jpg",
   "img/shoes/s-l1600-48.jpg",
   "img/shoes/s-l1600-49.jpg"
  ],
  "desc": "Gucci шлёпанцы. Принт, состояние отличное. Размер 41–42. По поводу размера и наличия пиши в Инсту @mnsureee!"
 },
 {
  "id": "givenchy-tyson",
  "cat": "footwear",
  "title": "Givenchy Tyson",
  "sub": "",
  "price": "720$",
  "old": null,
  "cover": "img/shoes/s-l1600-50.jpg",
  "photos": [
   "img/shoes/s-l1600-50.jpg",
   "img/shoes/s-l1600-51.jpg",
   "img/shoes/s-l1600-52.jpg"
  ],
  "desc": "Givenchy Tyson  размер 42. Состояние огонь. По поводу размера и наличия пиши в Инсту @mnsureee!"
 },
 {
  "id": "chrome-hearts-sale",
  "cat": "sale",
  "title": "Chrome Hearts",
  "sub": "XL",
  "price": "100$",
  "old": "150$",
  "cover": "img/skidki/s-l1600-53.jpg",
  "photos": [
   "img/skidki/s-l1600-53.jpg",
   "img/skidki/s-l1600-54.jpg",
   "img/skidki/s-l1600-55.jpg"
  ],
  "desc": "Chrome Hearts  размер XL. Скидка! Состояние 9/10. По поводу размера и наличия пиши в Инсту @mnsureee!"
 },
 {
  "id": "bape-sale",
  "cat": "sale",
  "title": "a Bathing Ape",
  "sub": "Черный, S",
  "price": "150$",
  "old": "200$",
  "cover": "img/skidki/s-l1600-56.jpg",
  "photos": [
   "img/skidki/s-l1600-56.jpg",
   "img/skidki/s-l1600-57.jpg"
  ],
  "desc": "Bape футболка. Black, размер M. Скидка! По поводу размера и наличия пиши в Инсту @mnsureee!"
 },
 {
  "id": "nike-airforce-sale",
  "cat": "sale",
  "title": "Nike Airforce low 07",
  "sub": "Black, 41",
  "price": "120$",
  "old": "200$",
  "cover": "img/skidki/s-l1600-58.jpg",
  "photos": [
   "img/skidki/s-l1600-58.jpg",
   "img/skidki/s-l1600-59.jpg",
   "img/skidki/s-l1600-60.jpg"
  ],
  "desc": "Nike Air Force 1 Low '07. black, размер 41. Скидка! По поводу размера и наличия пиши в Инсту @mnsureee!"
 },
 {
  "id": "ysl-sale",
  "cat": "sale",
  "title": "Yves Saint Laurent",
  "sub": "Черный, L",
  "price": "100$",
  "old": "200$",
  "cover": "img/skidki/s-l1600-61.jpg",
  "photos": [
   "img/skidki/s-l1600-61.jpg",
   "img/skidki/s-l1600-62.jpg",
   "img/skidki/s-l1600-63.jpg"
  ],
  "desc": "YSL футболка. Чёрный, размер L. Скидка! По поводу размера и наличия пиши в Инсту @mnsureee!"
 },
 {
  "id": "givenchy-star-tshirt",
  "cat": "sale",
  "title": "Givenchy Star Tshirt",
  "sub": "Черный, M",
  "price": "160$",
  "old": "200$",
  "cover": "img/skidki/s-l1600-64.jpg",
  "photos": [
   "img/skidki/s-l1600-64.jpg",
   "img/skidki/s-l1600-65.jpg",
   "img/skidki/s-l1600-66.jpg"
  ],
  "desc": "Givenchy Star футболка. Чёрный, размер M. Скидка! По поводу размера и наличия пиши в Инсту @mnsureee!"
 },
 {
  "id": "golden-goose-sneakers",
  "cat": "sale",
  "title": "Golden Goose sneakers",
  "sub": "41",
  "price": "140$",
  "old": "200$",
  "cover": "img/skidki/s-l1600-67.jpg",
  "photos": [
   "img/skidki/s-l1600-67.jpg",
   "img/skidki/s-l1600-68.jpg",
   "img/skidki/s-l1600-69.jpg"
  ],
  "desc": "Golden Goose  Состояние отличное, размер 41. Скидка! По поводу размера и наличия пиши в Инсту @mnsureee!"
 }
];
