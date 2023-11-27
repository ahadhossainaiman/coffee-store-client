import { Link } from 'react-router-dom';
import heroBg from '../../assets/Rectangle2.png';

const HeroSection = () => {
    return (
        <section style={{ backgroundImage: `url(${heroBg})` }} className='h-[90vh] bg-cover bg-center'>
            <div className='absolute right-16 top-1/3'>
            <h1 className='text-white text-6xl '>Would you like a Cup of Delicious Coffee?</h1>
            <p className='text-white my-10 text-2xl'>It's coffee time - Sip & Savor - Relaxation in every sip! Get the nostalgia back!! Your companion of
            <br /> every moment!!! Enjoy the beautiful moments and make them memorable.</p>
            <Link to='/'> <span className='text-white py-5 px-10 rounded-md text-3xl bg-amber-500'>Learn More</span></Link>
            </div> 
        </section>
    );
};

export default HeroSection;