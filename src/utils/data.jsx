import { IoIosArrowDown } from "react-icons/io";
import { FaStar } from "react-icons/fa";
import { CiStar, CiHeart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";
import { TbBrandFiverr } from "react-icons/tb";
import { FaTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const navLinks = [
  {
    id: 0,
    label: 'Home',
    link: 'home',
  },
  {
    id: 1,
    label: 'Menu',
    link: 'menu',
    arrowDown: <IoIosArrowDown size={20} color='#53ec63' />,
  },
  {
    id: 2,
    label: 'Services',
    link: 'services',
    arrowDown: <IoIosArrowDown size={20} color='#53ec63' />,
  },
  {
    id: 3,
    label: 'Offers',
    link: 'offers',
  },
]


const popupdata = [
  {
    id: 0,
    title: 'Spicy noodles',
    icons: [<FaStar color='yellow' size={13} />,
    <FaStar color='yellow' size={13} />,
    <FaStar color='yellow' size={13} />,
    <CiStar color='#1a1a1a' size={13} />,
    <CiStar color='#1a1a1a' size={13} />],
    price: '18.00',
    img: '/images/popup.png',
    className: '-left-10'
  },
  {
    id: 1,
    title: 'Vegetarian salad',
    icons: [<FaStar color='yellow' size={13} />,
    <FaStar color='yellow' size={13} />,
    <FaStar color='yellow' size={13} />,
    <FaStar color='yellow' size={13} />,
    <CiStar color='black' size={13} />],
    price: '23.00',
    img: '/images/popup-2.png',
    className: '-right-10'
  },
]
const popularCategories = [
  {
    id: 0,
    title: 'Main Dish',
    imgUrl: '/images/pngwing 4.png',
    dishes: '86 dishes',
  },
  {
    id: 1,
    title: 'Break Fast',
    imgUrl: '/images/pngwing 6.png',
    dishes: '12 break fast',
  },
  {
    id: 2,
    title: 'Dessert',
    imgUrl: '/images/pngwing 3.png',
    dishes: '48 dessert',
  },
  {
    id: 3,
    title: 'Browse All',
    imgUrl: '/images/pngwing 7.png',
    dishes: '255 items',
  },
]

const special_disheData = [
  {
    id: 0,
    title: 'Fattoush salad',
    description: 'Fattoush is a Middle Eastern chopped salad made with fresh herbs, crispy pita bread. Try this delicious recipe!',
    price: '24.00',
    rating: '4.9',
    imgUrl: '/images/Fattoush salad.png',
    icon: <FaHeart size={15} color='white' />
  },
  {
    id: 1,
    title: 'Vegetable salad',
    description: "Fresh Vegetable Salad is a quick & easy recipe that's loaded with veggies and tossed in a creamy dressing making it",
    price: '26.00',
    rating: '4.6',
    imgUrl: '/images/Vegetable salad.png',
    icon: <CiHeart size={20} color='white' />
  },
  {
    id: 2,
    title: 'Egg vegi salad',
    description: 'Crunchy carrot, cucumber and scallions are a colorful addition to this vegetarian egg salad recipe. Check It',
    price: '23.00',
    rating: '4.5',
    imgUrl: '/images/Egg salad.png',
    icon: <CiHeart size={20} color='white' />
  },

]

const imgsrc = [
  {
    id: 0,
    imgUrl: '/images/user1.png'
  },
  {
    id: 1,
    imgUrl: '/images/user2.png'
  },
  {
    id: 2,
    imgUrl: '/images/user3.png'
  },
]

const footerLinks = [
  {
    id: 0,
    title: 'Useful links',
    links: ['About us', 'Event', 'Blogs', 'FAQ']

  },
  {
    id: 1,
    title: 'Main Menu',
    links: ['Home', 'Offers', 'Menus', 'Reservation']

  },
  {
    id: 2,
    title: 'Contact Us',
    links: ['example@email.com', '+64 958 248 966', 'Social media']

  },
]
const socail_media = [
  {
    id: 0,
    socail_icon: [<TbBrandFiverr color="#53ec63" size={20} />, <FaTwitter color="#1a1a1a" size={20} />, <FaInstagram color="#1a1a1a" size={20} />, <FaYoutube color="#1a1a1a" size={20} />]
  },
]
const storyData = [
  {
    id: 0,
    icon: '/images/Food.png',
    title: 'Catering',
    descritpion: 'Delight your guests with our flavors and  presentation'
  },
  {
    id: 1,
    icon: '/images/fast delivery.png',
    title: 'Fast delivery',
    descritpion: 'We deliver your order promptly to your door'
  },
  {
    id: 2,
    icon: '/images/Cart.png',
    title: 'Online Ordering',
    descritpion: 'Explore menu & order with ease using our Online'
  },
  {
    id: 3,
    icon: '/images/Gift.png',
    title: 'Gift Cards',
    descritpion: 'Give the gift of exceptional dining with Foodi Gift Cards'
  },
]
export { navLinks, popupdata, popularCategories, special_disheData, imgsrc, footerLinks, socail_media,storyData }