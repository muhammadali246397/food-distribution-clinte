import { useGetAllSupplyQuery } from "../redux/foodManagment/foodSupplyApi";


const AllSupplies = () => {
    const {data} = useGetAllSupplyQuery('getdata')
    console.log(data)
    return (
        <div>
            <h1>this is all supplies page</h1>
        </div>
    );
};

export default AllSupplies;