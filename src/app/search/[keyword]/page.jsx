import Navbar from "@/components/Navbar";
import { getAnimeResponse } from "@/libs/api-libs";
import AnimeList from "@/components/AnimeList";
import Header from "@/components/AnimeList/Header";
import InputSearch from "@/components/Navbar/InputSearch"
import Link from "next/link"


const Page = async ({ params }) => {
    const { keyword } = await params;

    const decodedKeyword = decodeURI(keyword);
    const searchAnime = await getAnimeResponse("anime", `q=${decodedKeyword}`);

    return (
        <>
            <section>
                <div className="flex md:flex-row flex-col justify-between md:items-center p-4 gap-2 bg-color-accent">
                    <Link href="/" className="font-bold text-2x">
                        ARIPNime
                    </Link>
                    <InputSearch />
                </div>
                <Header title={`Pencarian Untuk ${decodedKeyword}...`} />
                <AnimeList api={searchAnime} />
            </section>
        </>
    );
};

export default Page;
