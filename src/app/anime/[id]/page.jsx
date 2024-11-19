import {
    getAnimeResponse,
    getNestedAnimeResponse,
    reproduce,
    getAnimeVideos
} from "@/libs/api-libs";
import VideoPlayer from "@/components/Utilities/VideoPlayer";
import RecommendedList from "@/components/AnimeList/RecommendedList";
import Image from "next/image";
import { authUserSession } from "@/libs/auth-libs";
import BackButton from "@/components/Utilities/BackButton";

const Page = async ({ params }) => {
    const { id } = await params;
    let recommendedAnime = await getNestedAnimeResponse(
        "recommendations/anime",
        "entry"
    );
    recommendedAnime = reproduce(recommendedAnime, 16);
    const anime = await getAnimeResponse(`anime/${id}`);
    //    console.log(anime)
    const user = await authUserSession();

    const videoInfo = await getAnimeVideos(id);

    return (
        <>
            <BackButton />
            <div className="mt-3 pt-4 px-4 flex justify-center items-center flex-col gap-3">
                <h3 className="text-3xl text-color-primary hover:text-color-accent font-bold">
                    {anime.data?.title} - {anime.data?.year}
                </h3>
                <h2 className="font-bold text-2xl text-color-primary">
                    {anime.data?.title_japanese}
                </h2>
            </div>
            <div className="flex justify-center flex-wrap gap-4 p-4">
                {anime.data?.genres.map((genre, index) => (
                    <span
                        key={`${genre.name} - ${index}`}
                        className="text-color-primary font-bold  p-3 border-2 border-color-accent rounded-xl hover:bg-color-accent hover:text-color-dark transition-all"
                    >
                        {genre.name}
                    </span>
                ))}
            </div>

            <div className="px-4 pb-5 flex gap-2 text-color-primary overflow-x-auto md:justify-center">
                <div className="w-auto flex flex-col justify-center items-center rounded border border-color-primary p-2">
                    <h3>Peringkat</h3>
                    <p className="text-center">{anime.data?.rank}</p>
                </div>
                <div className="w-auto flex flex-col justify-center items-center rounded border border-color-primary p-2">
                    <h3>Rating</h3>
                    <p className="text-center">{anime.data?.score}</p>
                </div>
                <div className="w-auto flex flex-col justify-center items-center rounded border border-color-primary p-2">
                    <h3>Type</h3>
                    <p className="text-center">{anime.data?.type}</p>
                </div>
                <div className="w-auto flex flex-col justify-center items-center rounded border border-color-primary p-2">
                    <h3>Members</h3>
                    <p className="text-center">{anime.data?.members}</p>
                </div>
                <div className="w-auto flex flex-col justify-center items-center rounded border border-color-primary p-2">
                    <h3>Sumber</h3>
                    <p className="text-center">{anime.data?.source}</p>
                </div>
                <div className="w-auto flex flex-col justify-center items-center rounded border border-color-primary p-2">
                    <h3>Episode</h3>
                    <p className="text-center">{anime.data?.episodes}</p>
                </div>
            </div>
            <div className="p-4 flex sm:flex-nowrap flex-wrap gap-2 text-color-primary">
                <Image
                    src={anime.data?.images.webp.image_url}
                    alt={anime.data?.images.jpg.image_url}
                    width={250}
                    height={250}
                    className="w-full rounded object-cover"
                />
                <div className="flex flex-col gap-3">
                    <h3 className="text-3xl font-bold">Synonpsis</h3>
                    <div>
                        <h2 className="text-2xl text-color-primary">
                            {anime.data?.title_synonyms}
                        </h2>
                        <p className="text-justify text-xl">
                            {anime.data?.synopsis}
                        </p>
                    </div>
                </div>
            </div>
            <div className="w-auto p-4 flex flex-col gap-3 text-color-primary">
            {videoInfo?.data?.episodes.map((episodes, index) => (
                <div 
                key={`${episodes.mal_id}`}
                className="flex justify-between items-center px-3 border border-color-accent p-4 gap-2 rounded rounded-2xl">
                    <h3 className="font-bold">{episodes?.episode}</h3>
                    <h3 className="font-bold">{episodes.title}</h3>
                </div>
           ))}
            </div>

            <div className="flex flex-col text-color-primary hover:text-color-aceent p-3 gap-2">
                <h1 className="text-3xl font-bold">Rekomendasi</h1>
                <RecommendedList api={recommendedAnime} />
            </div>

            <div className="z-50">
                <VideoPlayer youtubeId={anime.data?.trailer.youtube_id} />
            </div>
        </>
    );
};

export default Page;
