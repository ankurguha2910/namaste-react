import { CDN_URL } from "../utils/constants";

const ItemList = ({items}) => {
    return (
    <div>
        {items.map((item) => 
        (
            <div key={item.card.info.id} className="m-2 p-2 border-gray-300 border-b-4 text-left flex justify-between">
                <div className="w-9/12">
                <div className="py-2">
                    <span>{item.card.info.name}</span>
                    <span> - ₹ {item.card.info.price ? item.card.info.price / 100 : item.card.info.defaultPrice / 100}</span>
                </div>
                <p className="text-xs">{item.card.info.description}</p>
                </div>
                <div className="w-3/12 p-4">
                    <div className="absolute bottom-auto">
                        <button className="p-2 mx-16 rounded-lg bg-black text-white shadow-lg">Add +</button>
                    </div>
                    <img src={CDN_URL +  item.card.info.imageId} className="w-full"></img>
                </div>
            </div>
        ))}
    </div>
    )
}

export default ItemList;