import navBg from '../../assets/Rectangle.png';
import logo from '../../assets/logo1 1.png';

const Navber = () => {
    return (
        <nav style={{ backgroundImage: `url(${navBg})` }} className='h-20  flex justify-center items-center gap-5'>
            <img src={logo} width='50px' alt="" />
            <h1 className='text-white text-3xl'>Espresso Emporium</h1>
            <img src="../../assets/Rectangle.png" alt="" />
        </nav>
    );
};

export default Navber;