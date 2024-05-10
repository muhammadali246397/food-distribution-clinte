
import food from '../../assets/food.jpg'

const SupplyPostCard = () => {
    return (
        <div>
            <div className="card w-full bg-base-100 shadow-xl">
                <figure><img src={food} alt="Shoes" /></figure>
                <div className="card-body text-start">
                    <h2 className="text-2xl font-semibold">Fresh Produce Bundle</h2>
                    <p><span className='text-lg font-semibold'>Category :</span> Food</p>
                    <p><span className='text-lg font-semibold'>Quantity :</span> 10kg</p>
                    
                    <div className="card-actions">
                    <button className="bg-[#0A152F] text-white font-semibold px-6 py-3 rounded-md text-lg mt-5 hover:text-red-600 focus:text-red-600 ">View Details</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SupplyPostCard;