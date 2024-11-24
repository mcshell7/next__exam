import { NextApiRequest, NextApiResponse } from "next";
import { searchMovies } from "@/app/services/api";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const { query, page } = req.query;

    if (!query || typeof query !== "string") {
        return res.status(400).json({ error: "Query is required." });
    }

    try {
        const movies = await searchMovies(query, parseInt(page as string) || 1);
        res.status(200).json(movies);
    } catch (error) {
        console.error("Error fetching search results:", error);
        res.status(500).json({ error: "Failed to fetch search results." });
    }
}
