import Image from 'next/image';

export default function Home() {
	return (
		<main className='flex min-h-screen flex-col items-center justify-between p-24'>
			<div className='z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex flex-col gap-20'>
				<p className='font-Atkinson font-bold italic text-yellow text-title'>MEMORY GAME</p>
				<span>main page...</span>
				<p className='text-alabaster text-subTitle'>
					Test Alabaster Color and Subtitle Size
				</p>
				<p className='text-hippieBlue text-body'>Test HippieBlue Color and Body Size</p>
			</div>
		</main>
	);
}
