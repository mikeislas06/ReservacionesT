import Image from 'next/image'

const Hero = () => {
    return (
        <div className='w-full h-[35vh] py-10 px-5 bg-linear-to-b from-text-muted to-orange-primary flex flex-col-reverse justify-between bg-[url("/images/triana-alberca.jpg")] bg-cover bg-center' id='hero-login'>
            <div className='text-white text-left bg-black/60 p-2 rounded-sm'>
                <h1 className='text-3xl font-bold'>Bienvenidos a casa</h1>
                <p className='text-sm'>Reserva amenidades y mantente al día con los avisos del fraccionamiento</p>
            </div>
            <div className='flex justify-start'>
                <Image
                    src="/images/logotriana.png"
                    alt="Logo"
                    width={150}
                    height={150}
                />
            </div>
        </div>
    )
}

export default Hero