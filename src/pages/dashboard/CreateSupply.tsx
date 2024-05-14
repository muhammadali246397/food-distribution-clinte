import { useForm, SubmitHandler } from "react-hook-form"
import { useAppDispatch } from "../../redux/hooks";
import { createSullpy } from "../../redux/feature/Slice";
import { useCreateSupplyMutation } from "../../redux/foodManagment/foodSupplyApi";

type Inputs = {
    title: string;
    category: string;
    quantity:string;
    image:string;
    description:string
}

const CreateSupply = () => {
    const [createsuppl, {}] = useCreateSupplyMutation();
    const {
        register,
        handleSubmit,
        formState: {},
    } = useForm<Inputs>()
    const onSubmit: SubmitHandler<Inputs> = (data:Inputs) => {
        
       createsuppl(data)
    }
    return (
        <div>
            <h1 className="text-4xl font-bold text-center my-5">Post New supply</h1>

            <div className="w-1/2 mx-auto border px-10">
                <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-xl font-semibold">Title</span>
                        </label>
                        <input type="text" placeholder="Title..." className="input input-bordered" {...register("title", { required: true, maxLength: 80 })} />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-xl font-semibold">Quantity</span>
                        </label>
                        <input type="text" placeholder="Quantity..." className="input input-bordered" {...register("quantity", { required: true, maxLength: 80 })} />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-xl font-semibold">Category</span>
                        </label>
                        <select className="border py-4 rounded-md px-4" {...register("category", { required: true })}>
                            <option value="Food">Food</option>
                            <option value="Hygiene Products">Hygiene Products</option>
                            <option value="Baby Essentials">Baby Essentials</option>
                            <option value="Aid">Aid</option>
                        </select>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-xl font-semibold">Image Link</span>
                        </label>
                        <input type="text" placeholder="Image Link.." className="input input-bordered" {...register("image", { required: true})} />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-xl font-semibold">Description</span>
                        </label>
                        <textarea placeholder="Description..." className="input input-bordered" {...register("description", { required: true})} />
                    </div>
                    <div className="form-control mt-6">
                    <button type="submit" className="bg-[#0A152F] text-white font-semibold px-10 py-5 rounded-md text-xl mt-5 hover:text-red-600 focus:text-red-600 ">Add Supply</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default CreateSupply;