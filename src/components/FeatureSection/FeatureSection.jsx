import icon1 from '../../assets/1.png';
import icon2 from '../../assets/2.png';
import icon3 from '../../assets/3.png';
import icon4 from '../../assets/4.png';

const FeatureSection = () => {
    return (
        <section className=' bg-[#ECEAE3] grid grid-cols-4 gap-5 px-48 h-[300px] items-center'>
        <div className=''>
            <img src={icon1} alt="" />
            <h1 className='text-3xl my-3'>Awesome Aroma</h1>
            <p>You will definitely be a fan of the design & aroma of your coffee</p>
        </div>
        <div className=''>
            <img src={icon2} alt="" />
            <h1 className='text-3xl my-3'>High Quality</h1>
            <p>We served the coffee to you maintaining the best quality</p>
        </div>
        <div className=''>
            <img src={icon3} alt="" />
            <h1 className='text-3xl my-3'>Pure Grades</h1>
            <p>The coffee is made of the green coffee beans which you will love</p>
        </div>
        <div className=''>
            <img src={icon4} alt="" />
            <h1 className='text-3xl my-3'>Proper Roasting</h1>
            <p>Your coffee is brewed by first roasting the green coffee beans</p>
        </div>
    </section>
    );
};

export default FeatureSection;