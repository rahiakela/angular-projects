import {InMemoryDbService} from 'angular-in-memory-web-api';
import {Category} from '../category/category.service';
import {Product} from '../product/product.service';

export class InMemoryDataService implements InMemoryDbService {

    createDb() {

        let categories: Category[] = [
            { id: '1', title: 'Bakery', imageS: 'http://placehold.it/348x171', imageL: 'http://placehold.it/1110x480', description: 'The best cupcakes, cookies, cakes, pies, cheesecakes, fresh bread, biscotti, muffins, bagels, fresh coffee and more.' },
            { id: '2', title: 'Takeaway', imageS: 'http://placehold.it/348x171', imageL: 'http://placehold.it/1110x480', description: 'It\'s consistently excellent, dishes are superb and healthily cooked with high quality ingredients.' },
            { id: '3', title: 'Dairy', imageS: 'http://placehold.it/348x171', imageL: 'http://placehold.it/1110x480', description: 'A dairy product is food produced from the milk of mammals, primarily cows, water buffaloes, goats, sheep, yaks, horses.' },
            { id: '4', title: 'Meat', imageS: 'http://placehold.it/348x171', imageL: 'http://placehold.it/1110x480', description: 'Only superior quality beef, lamb, and pork.' },
            { id: '5', title: 'Seafood', imageS: 'http://placehold.it/348x171', imageL: 'http://placehold.it/1110x480', description: 'Great place to buy fresh seafood.' },
            { id: '6', title: 'Fruit & Veg', imageS: 'http://placehold.it/348x171', imageL: 'http://placehold.it/1110x480', description: 'A variety of fresh fruits and vegetables.' }
        ];

        let products: Product[] = [
            // Bakery
            { id: '1', categoryId: '1', title: 'Baguette/French Bread', price: 1.5, isSpecial: false, imageL: 'http://placehold.it/1110x480', imageS: 'http://placehold.it/260x171', description: 'Great eaten fresh from oven. Used to make sub sandwiches, etc.' },
            { id: '2', categoryId: '1', title: 'Croissants', price: 0.5, isSpecial: true, imageL: 'http://placehold.it/1110x480', imageS: 'http://placehold.it/260x171', description: 'Acroissant is a buttery, flaky, viennoiserie-pastry named for its well-known crescentshape.' },
            // Takeaway
            { id: '3', categoryId: '2', title: 'Pizza', price: 1.2, isSpecial: false, imageL: 'http://placehold.it/1110x480', imageS: 'http://placehold.it/260x171', description: 'Pizza isa flatbread generally topped with tomato sauce and cheese and baked in an oven.' },
            // Dairy
            { id: '4', categoryId: '3', title: 'Milk', price: 1.7, isSpecial: false, imageL: 'http://placehold.it/1110x480', imageS: 'http://placehold.it/260x171', description: 'Milk is a pale liquid produced by the mammary glands of mammals' },
            { id: '5', categoryId: '3', title: 'Cream Cheese', price: 2.35, isSpecial: false, imageL: 'http://placehold.it/1110x480', imageS: 'http://placehold.it/260x171', description: 'Cream cheese is a soft, mild-tasting fresh cheese with a high fat content.' },
            // Meat
            { id: '6', categoryId: '4', title: 'Pork Tenderloin', price: 5.60, isSpecial: false, imageL: 'http://placehold.it/1110x480', imageS: 'http://placehold.it/260x171', description: 'The pork tenderloin, in some countries called pork fillet, is a cut of pork. '},
            { id: '7', categoryId: '4', title: 'Ribs, Baby Back', price: 4.85, isSpecial: false, imageL: 'http://placehold.it/1110x480', imageS: 'http://placehold.it/260x171', description: 'Pork ribs are a cut of pork popular in North American and Asian cuisines. ' },
            { id: '8', categoryId: '4', title: 'Ground Beef', price: 9.20, isSpecial: false, imageL: 'http://placehold.it/1110x480', imageS: 'http://placehold.it/260x171', description: 'Ground beef, beef mince, minced beef, minced meat is a ground meat made of beef thathas been finely chopped with a large knife or a meat grinder.' },
            // Seafood
            { id: '9', categoryId: '5', title: 'Tuna', price: 3.45, isSpecial: false, imageL: 'http://placehold.it/1110x480', imageS: 'http://placehold.it/260x171', description: 'A tuna isa saltwater finfish that belongs to the tribe Thunnini, a sub-grouping of the mackerelfamily - which together with the tunas, also includes the bonitos, ackerels, andSpanish mackerels.' },
            { id: '10', categoryId: '5', title: 'Salmon', price: 4.55, isSpecial: false, imageL: 'http://placehold.it/1110x480', imageS: 'http://placehold.it/260x171', description: 'Salmon is the common name for several species of ray-finned fish in the familySalmonidae.' },
            { id: '11', categoryId: '5', title: 'Oysters', price: 7.80, isSpecial: false, imageL: 'http://placehold.it/1110x480', imageS: 'http://placehold.it/260x171', description: 'The word oyster is used as a common name for a number of different families ofsaltwater clams, bivalve molluscs that live in marine or brackish habitats.' },
            { id: '12', categoryId: '5', title: 'Scalops', price: 2.70, isSpecial: false, imageL: 'http://placehold.it/1110x480', imageS: 'http://placehold.it/260x171', description: 'Scallop is a common name that is primarily applied to any one of numerous species ofsaltwater clams or marine bivalve mollusks in the taxonomic family Pectinidae, thescallops.' },
            // Fruit & Veg
            { id: '13', categoryId: '6', title: 'Banana', price: 1.55, isSpecial: false, imageL: 'http://placehold.it/1110x480', imageS: 'http://placehold.it/260x171', description: 'The banana is an edible fruit, botanically a berry, produced by several kinds oflarge herbaceous flowering plants in the genus Musa.' },
            { id: '14', categoryId: '6', title: 'Cucumber', price: 1.05, isSpecial: false, imageL: 'http://placehold.it/1110x480', imageS: 'http://placehold.it/260x171', description: 'Cucumber is a widely cultivated plant in the gourd family, Cucurbitaceae. ' },
            { id: '15', categoryId: '6', title: 'Apple', price: 0.80, isSpecial: false, imageL: 'http://placehold.it/1110x480', imageS: 'http://placehold.it/260x171', description: 'The appletree is a deciduous tree in the rose family best known for its sweet, pomaceous fruit,the apple.' },
            { id: '16', categoryId: '6', title: 'Lemon', price: 3.20, isSpecial: false, imageL: 'http://placehold.it/1110x480', imageS: 'http://placehold.it/260x171', description: 'The lemonis a species of small evergreen tree native to Asia.' },
            { id: '17', categoryId: '6', title: 'Pear', price: 4.25, isSpecial: false, imageL: 'http://placehold.it/1110x480', imageS: 'http://placehold.it/260x171', description: 'The pearis any of several tree and shrub species of genus Pyrus, in the family Rosaceae.' },
            { id: '18', categoryId: '6', title: 'Peas', price: 4.25, isSpecial: false, imageL: 'http://placehold.it/1110x480', imageS: 'http://placehold.it/260x171', description: 'The pearis any of several tree and shrub species of genus Pyrus, in the family Rosaceae.' }
        ];

        return {
            categories,
            products
        };
    }
}
