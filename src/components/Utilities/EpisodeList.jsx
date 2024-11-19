const EpisodeList = () => {
    return (
        <div className="w-auto p-4 flex flex-col gap-1 text-color-primary">
            {videoInfo?.data?.episodes.map((episodes, index) => (
                <div
                    key={`${episodes.mal_id}`}
                    className="flex justify-between items-center px-3 border border-color-accent p-4"
                >
                    <h3 className="font-bold">{episodes?.episode}</h3>
                    <h3 className="font-bold">{episodes.title}</h3>
                </div>
            ))}
        </div>
    );
};

export default EpisodeList;
