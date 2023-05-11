import React from 'react';
import styled from 'styled-components';
import { PageHero } from '../components';
import aboutImg from '../assets/hero-bcg.jpeg';

const AboutPage = () => {
	return (
		<main>
			<PageHero title='about' />
			<Wrapper className='page section section-center'>
				<img src={aboutImg} alt='nice desk' />
				<article>
					<div className='title'>
						<h2>our story</h2>
						<div className='underline'></div>
					</div>
					<p>
						At ComfySloth, our story began with a passion for creating
						furniture that is both functional and stylish. With a focus on
						quality and craftsmanship, we started by designing and
						manufacturing furniture for local customers in our community. As
						our reputation grew, so did our reach, and we soon expanded our
						operations to serve customers nationwide. Today, we are proud to
						offer a wide range of furniture styles that cater to the unique
						needs of our customers, all while maintaining the same commitment
						to quality and design that has been at the heart of our story
						since the beginning. Whether you're looking to create a cozy
						living space, a sophisticated bedroom, or an inviting outdoor
						oasis, we have the perfect furniture pieces to help you bring your
						vision to life.
					</p>
				</article>
			</Wrapper>
		</main>
	);
};

const Wrapper = styled.section`
	display: grid;
	gap: 4rem;
	img {
		width: 100%;
		display: block;
		border-radius: var(--radius);
		height: 500px;
		object-fit: cover;
	}
	p {
		line-height: 2;
		max-width: 45em;
		margin: 0 auto;
		margin-top: 2rem;
		color: var(--clr-grey-5);
	}
	.title {
		text-align: left;
	}
	.underline {
		margin-left: 0;
	}
	@media (min-width: 992px) {
		grid-template-columns: 1fr 1fr;
	}
`;
export default AboutPage;
