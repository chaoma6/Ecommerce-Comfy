import React from 'react';
import { GiCompass, GiDiamondHard, GiStabbedNote } from 'react-icons/gi';
export const links = [
	{
		id: 1,
		text: 'home',
		url: '/',
	},
	{
		id: 2,
		text: 'about',
		url: '/about',
	},
	{
		id: 3,
		text: 'products',
		url: '/products',
	},
];

export const services = [
	{
		id: 1,
		icon: <GiCompass />,
		title: 'mission',
		text: 'Our mission is to provide high-quality and sustainable furniture that meets the unique needs of our customers.',
	},
	{
		id: 2,
		icon: <GiDiamondHard />,
		title: 'vision',
		text: 'Our vision is to become the leading provider of customizable furniture, creating unique and innovative designs.',
	},
	{
		id: 3,
		icon: <GiStabbedNote />,
		title: 'history',
		text: 'Our company has a rich history of innovation, constantly striving to create new and unique designs.',
	},
];

export const products_url = 'https://course-api.com/react-store-products';

export const single_product_url = `https://course-api.com/react-store-single-product?id=`;
