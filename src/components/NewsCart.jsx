import { format } from "date-fns";
import { CiBookmark } from "react-icons/ci";
import { FaEye } from "react-icons/fa";
import { FaShareAlt } from "react-icons/fa";
import { FaStar } from "react-icons/fa";


const NewsCard = ({ CatNews }) => {
    const {
        title,
        rating,
        total_view,
        
        thumbnail_url,
        details,
        tags,
    } = CatNews;

    return (
        <div className="card shadow-xl bg-base-100">
            {/* Header */}
            <div className="bg-base-200 rounded-t-lg flex justify-between items-center p-4 border-b border-base-300">
                <div className="flex items-center gap-3">
                    <img src={CatNews.author.img} alt={CatNews.author.name} className="w-10 h-10 rounded-full" />
                    <div>
                        <h2 className="font-semibold text-sm">{CatNews.author.name}</h2>
                        <p className="text-xs text-gray-500">
                            {format(new Date(CatNews.author.published_date), "yyyy-MM-dd")}
                        </p>
                    </div>
                </div>
                <div className="flex gap-3 text-2xl">
                    <CiBookmark />
                    <FaShareAlt className="text-gray-500 cursor-pointer" />
                </div>
            </div>

            {/* Body */}
            <div className="px-4 py-2">
                <h3 className="text-lg font-bold leading-snug">{title}</h3>
                <figure className="my-4">
                    <img src={thumbnail_url} alt="news thumbnail" className="rounded-lg w-full" />
                </figure>
                <p className="text-sm text-gray-700">
                    {details.slice(0, 150)}...
                    <span className="text-blue-500 cursor-pointer ml-1">Read More</span>
                </p>

                <p className="text-xs mt-2 text-gray-400">
                    Tags: {tags.map((tag) => <span key={tag} className="mr-1">#{tag}</span>)}
                </p>
            </div>

            {/* Footer */}
            <div className="px-4 py-2 flex justify-between items-center border-t border-base-300">
                <div className="flex items-center gap-1 text-warning">
                    {[...Array(rating.number)].map((_, i) => (
                        <FaStar key={i} />
                    ))}
                    <span className="text-black ml-1">{rating.number}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-500">
                    <FaEye />
                    <span>{total_view}</span>
                </div>
            </div>
        </div>
    );
};

export default NewsCard;
