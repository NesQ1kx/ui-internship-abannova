import src1 from "../images/shopImg1.png";
import src2 from "../images/shopImg2.png";
import src3 from "../images/shopImg3.png";
import src4 from "../images/shopImg4.png";
import src5 from "../images/shopImg5.png";
import src6 from "../images/shopImg6.png";
import src7 from "../images/shopImg7.png";
import src8 from "../images/shopImg8.png";
import src9 from "../images/shopImg9.png";
import cSrc1 from '../images/color1.png';
import cSrc2 from '../images/color2.png';
import cSrc3 from '../images/color3.png';
import cSrc4 from '../images/color4.png';
import cSrc5 from '../images/color5.png';
import tpSrc1 from '../images/designGallery.png';
import tpSrc2 from '../images/supplierCatalog.png';

const text = 'The Trevista 80 Smooth paver is ideal for any driveway application by adding instant curb appeal to your landscape. Complimenting the Trevista 50 Smooth slab, this collection can be used in both vehicular and pedestrian applications, allowing for a seamless transition from the driveway to backyard.';

export const PRODUCTS = [
  {
    id: 1,
    sale: 30,
    saleGreen: true,
    imageUrl: src1,
    title: 'Balsam',
    typeId: 3,
    price: 299,
    colorId: 1,
    description: text,
    info: text,
    units: text,
    category: 'Walls',
    categoryId: 2,
  },
  {
    id: 2,
    sale: 30,
    saleGreen: true,
    imageUrl: src2,
    title: 'Ashford',
    typeId: 2,
    price: 315,
    colorId: 2,
    description: text,
    info: text,
    units: text,
    category: 'Slabs',
    categoryId: 3,
  },
  {
    id: 3,
    sale: false,
    imageUrl: src3,
    title: 'Manhattan Plank',
    typeId: 4,
    price: 425,
    colorId: 3,
    description: text,
    info: text,
    units: text,
    category: 'Slabs',
    categoryId: 3,
  },
  {
    id: 4,
    sale: false,
    imageUrl: src4,
    title: 'Trevista 80 Textured',
    typeId: 6,
    price: 453,
    colorId: 2,
    description: text,
    info: text,
    units: text,
    category: 'Pavers',
    categoryId: 4,
  },
  {
    id: 5,
    sale: false,
    imageUrl: src5,
    title: 'Adelaide 80',
    typeId: 8,
    price: 542,
    colorId: 4,
    description: text,
    info: text,
    units: text,
    category: 'Steps, Caps & Curbs',
    categoryId: 5,
  },
  {
    id: 6,
    sale: 30,
    saleGreen: true,
    imageUrl: src6,
    title: 'Richmond 80',
    typeId: 7,
    price: 345,
    colorId: 5,
    description: text,
    info: text,
    units: text,
    category: 'Steps, Caps & Curbs',
    categoryId: 5,
  },
  {
    id: 7,
    sale: 30,
    saleGreen: true,
    imageUrl: src7,
    title: 'Ardesia',
    typeId: 8,
    price: 322,
    colorId: 5,
    description: text,
    info: text,
    units: text,
    category: 'Features',
    categoryId: 7,
  },
  {
    id: 8,
    sale: 30,
    saleGreen: true,
    imageUrl: src8,
    title: 'Strada Nova',
    typeId: 9,
    price: 390,
    colorId: 2,
    description: text,
    info: text,
    units: text,
    category: 'Features',
    categoryId: 7,
  },
  {
    id: 9,
    sale: false,
    imageUrl: src9,
    title: 'Moderna',
    typeId: 10,
    price: 415,
    colorId: 5,
    description: text,
    info: text,
    units: text,
    category: 'Features',
    categoryId: 7,
  }
];

export const TOP_POSTS = [
  {
    id: 1,
    category: 'Pavers',
    title: 'Ashford, Belgium, Manhattan Plank, Trevista 80 Smooth',
    description: 'Interlocking pavers are known by many names including patio stones, garden paver, interlocking stone, segmental pavers. Whatever it is called, these products are incredibly versatile in their use.',
    url: '',
    imageUrl: ''
  },
  {
    id: 2,
    category: 'Walls',
    title: 'Soho Wall, Ikon Wall, Hazelton Wall, Garden Lock, Antico Stacker\n',
    description: 'A single dimensional stone with maximum versatility, the Antico® Stacker is ideal for almost any outdoor application including outdoor kitchens, garden walls, barbeques and decorative columns.\n',
    url: '#',
    imageUrl: '',
    green: true
  },
  {
    id: 3,
    category: 'Slabs',
    title: 'Avari, Tresca, Balsam, OpusBW300, Richmond 50, Flagstone\n',
    description: 'Combining the warm, classic look of natural stone walkways with the modern edges of machined tile, the Flagstone™ slab blends seamlessly into your oasis. The subtle texture awakens in low light.\n',
    url: '',
    imageUrl: ''
  }
];

export const BOTTOM_POSTS = [
  {
    id: 4,
    category: 'Design Gallery',
    title: '',
    description: 'Being inspired to come up with an idea that you love and work for you should not be a difficult or hard task, it should be fun and enjoyable. There you can see our design gallery to getting inspired\n',
    url: '',
    imageUrl: tpSrc1
  },
  {
    id: 5,
    category: 'Supplier catalogs',
    title: '',
    description: 'Our curated products work together to help you achieve a landscape that is thoughtfully and creatively built for living, working and playing. There you can see some of our supplier catalogs.\n',
    url: '#',
    imageUrl: tpSrc2
  }
];

export const CATEGORY_FILTERS = [
  {
    id: 2,
    name: 'Walls'
  },
  {
    id: 3,
    name: 'Slabs'
  },
  {
    id: 4,
    name: 'Pavers'
  },
  {
    id: 5,
    name: 'Steps, Caps & Curbs'
  },
  {
    id: 6,
    name: 'Enviro Products'
  },
  {
    id: 7,
    name: 'Features'
  },
];

export const PRODUCT_FILTERS = [
  {
    id: 2,
    name: 'Ashford'
  },
  {
    id: 3,
    name: 'Belgium'
  },
  {
    id: 4,
    name: 'Manhattan Plank'
  },
  {
    id: 5,
    name: 'Trevista 80 Smooth'
  },
  {
    id: 6,
    name: 'Trevista 80 Textured'
  },
  {
    id: 7,
    name: 'Richmond 80'
  },
  {
    id: 8,
    name: 'Adelaide 80'
  },
  {
    id: 9,
    name: 'Strada Nova'
  },
  {
    id: 10,
    name: 'Double Standard'
  },
];

export const COLOR_FILTERS = [
  {
    id: 1,
    img: cSrc1
  },
  {
    id: 2,
    img:cSrc2
  },
  {
    id: 3,
    img: cSrc3
  },
  {
    id: 4,
    img: cSrc4
  },
  {
    id: 5,
    img: cSrc5
  },
];
