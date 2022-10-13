import { InferGetServerSidePropsType } from 'next';
import Head from 'next/head';

import Guage from '@/components/Guage/Guage';
import Header from '@/components/Header/Header';
import SadFace from '@/components/SadFace/SadFace';
import { Data } from '@/types/guage.types';

import styles from '@/styles/Home.module.css';

export const getServerSideProps = async () => {
	const res = await fetch(process.env.NEXT_PUBLIC_TEST_API!);
	const data: Data = await res.json();

	return {
		props: {
			data,
		},
	};
};

function Home({
	data,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
	return (
		<>
			<Head>
				<title>Sam Vargas | Geckoboard FE Tech Test</title>
				<meta
					name="description"
					content="Sam Vargas | Geckoboard FE Tech Test"
				/>
			</Head>

			<Header />

			<main className={styles.main}>
				{!data.error && <Guage {...data} />}

				{!!data.error && (
					<div className={styles.errorContainer}>
						<SadFace className={styles.sadFace} />
						{/* using output as well as status has broader support across older browsers */}
						<output role="status" className={styles.output}>
							{/* The API does have an error message but may not need much to the average user! */}
							Whoops. There was an error fetching the data.
							<br />
							Please refresh the page
						</output>
					</div>
				)}
			</main>
		</>
	);
}

export default Home;
