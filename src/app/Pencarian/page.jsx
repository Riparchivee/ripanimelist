import AnimeList from "@/components/AnimeList";
import {
    getAnimeResponse,
    getNestedAnimeResponse,
    reproduce
} from "@/libs/api-libs";
import InputSearch from "@/components/Navbar/InputSearch";
import Link from "next/link";


const Page = async () => {
    const topAnime = await getAnimeResponse("top/anime", "limit=8");
    let recommendedAnime = await getNestedAnimeResponse(
        "recommendations/anime",
        "entry"
    );
    recommendedAnime = reproduce(recommendedAnime, 20);

    return (
        <>
            <div className="flex md:flex-row flex-col justify-between md:items-center p-4 gap-2 bg-color-accent">
                <Link href="/" className="font-bold text-2xl">
                    ARIPNime
                </Link>
                <InputSearch />
            </div>

            <div className="mt-6">
                <AnimeList api={recommendedAnime} />
            </div>
        </>
    );
};

export default Page;
