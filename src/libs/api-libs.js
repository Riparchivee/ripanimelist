export const getAnimeResponse = async(resource, query) => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/${resource}?${query}`)
    const anime = await response.json()
    return anime
}

export const getAnimeVideos = async(resource) => {
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/anime/${resource}/videos`)
        if (!response.ok) {
            console.error(`HTTP error ${response.status}`)
        }
        const video = await response.json()
        return video
    } catch (error) {
        console.error('Error fetching anime video:', error)
        throw error
    }
}

export const getNestedAnimeResponse = async(resource, objectProperty) => {
    const response = await getAnimeResponse(resource)
    return response.data?.flatMap(item => item[objectProperty])
}

export const reproduce = (data, gap) => {
    const first = ~~(Math.random() * (data?.length - gap) + 1)
    const last = first + gap

    const response = {
        data: data?.slice(first, last)
    }

    return response
}