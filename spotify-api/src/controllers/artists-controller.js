const spotifyApi = require("../lib/spotify-lib/spotify-api");
const { Request, Response } = require("express");

/**
 * Route returning all artists related to a query parameter.
 *
 * @param {Request} req - The request object.
 * @param {Response} res - The response object.
 *
 */
const searchArtists = async (req, res) => {
    try {
        const { name } = req.query;
        const artists = await spotifyApi.search(name, ["artist"], "ZA", 50);
        res.status(200).json({
            data: artists,
        });
    } catch (e) {
        // replace with custom status code if needed
        res.status(500).json({
            message: e.message,
        });
    }
};

const searchArtist = async (req, res) => {
    try {
        const { artistID } = req.query;
        const artist = await spotifyApi.artists.get(artistID);
        res.status(200).json({
            data: artist,
        });
    } catch (e) {
        // replace with custom status code if needed
        res.status(500).json({
            message: e.message,
        });
    }
};

const searchRelatedArtist = async (req, res) => {
    try {
        const { artistID } = req.query;
        const relatedArtists = await spotifyApi.artists.relatedArtists(
            artistID
        );
        res.status(200).json({
            data: relatedArtists,
        });
    } catch (e) {
        // replace with custom status code if needed
        res.status(500).json({
            message: e.message,
        });
    }
};

module.exports = {
    searchArtists,
    searchArtist,
    searchArtistAlbums,
    searchArtistTracks,
    searchRelatedArtist,
};
