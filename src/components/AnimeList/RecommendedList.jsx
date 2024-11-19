import Image from "next/image";
import Link from "next/link";

const RecommendedList = ({ api }) => {
  return (
    <div className="overflow-x-auto px-4">
      <div className="flex gap-4 flex-nowrap">
        {api.data?.map((anime) => (
          <Link
            href={`/anime/${anime.mal_id}`}
            className="cursor-pointer shadow-xl text-color-primary hover:text-color-accent transition-all min-w-[200px]"
            key={anime.mal_id}
          >
            <Image
              src={anime.images.webp.image_url}
              alt={anime.title}
              width={200}
              height={300}
              className="rounded-md"
            />
            <h3 className="font-bold text-md p-2">{anime.title}</h3>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default RecommendedList;
