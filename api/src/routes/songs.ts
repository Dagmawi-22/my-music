import express from "express";
import Song, { ISong } from "../../models/Song";

const router = express.Router();

router.get("/api/songs", async (req, res) => {
  try {
    const songs = await Song.find();
    return res.json({ songs });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
});

router.get("/api/songs/:id", async (req, res) => {
  try {
    const song = await Song.findById(req.params.id);
    if (!song) {
      return res.status(404).json({ error: "Song not found" });
    }
    return res.json({ song });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
});

router.post("/api/songs", async (req, res) => {
  try {
    const { title, album, artist, genre } = req.body;
    const newSong: ISong = new Song({ title, album, artist, genre });
    const savedSong = await newSong.save();
    return res.json({ song: savedSong });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
});

router.put("/api/songs/:id", async (req, res) => {
  try {
    const song = await Song.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!song) {
      return res.status(404).json({ error: "Song not found" });
    }
    return res.json({ song });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
});

router.delete("/api/songs/:id", async (req, res) => {
  try {
    const deletedSong = await Song.findByIdAndDelete(req.params.id);
    if (!deletedSong) {
      return res.status(404).json({ error: "Song not found" });
    }
    return res.json({ message: "Song deleted successfully" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
});

router.get("/api/stats", async (req, res) => {
  try {
    const songData = await Song.find();
    const totalSongs = await Song.countDocuments();
    const genresStats = await Song.aggregate([
      { $group: { _id: "$genre", count: { $sum: 1 } } },
    ]);
    import express from "express";
    import Song, { ISong } from "../../models/Song";

    const router = express.Router();

    const getStats = async () => {
      const totalSongs = await Song.countDocuments();
      const genresStats = await Song.aggregate([
        { $group: { _id: "$genre", count: { $sum: 1 } } },
      ]);

      const artistsStats = await Song.aggregate([
        { $group: { _id: "$artist", count: { $sum: 1 } } },
      ]);

      const totalGenres = genresStats.length;
      const totalArtists = artistsStats.length;
      const totalAlbums = await Song.distinct("album").countDocuments();

      return {
        totalSongs,
        totalGenres,
        totalArtists,
        totalAlbums,
        genresStats,
        artistsStats,
      };
    };

    router.get("/api/songs", async (req, res) => {
      try {
        const songs = await Song.find();
        const stats = await getStats();
        return res.json({ songs, stats });
      } catch (error) {
        console.error(error);
        return res.status(500).json({ error: "Internal Server Error" });
      }
    });

    router.get("/api/songs/:id", async (req, res) => {
      try {
        const song = await Song.findById(req.params.id);
        if (!song) {
          return res.status(404).json({ error: "Song not found" });
        }
        const stats = await getStats();
        return res.json({ song, stats });
      } catch (error) {
        console.error(error);
        return res.status(500).json({ error: "Internal Server Error" });
      }
    });

    router.post("/api/songs", async (req, res) => {
      try {
        const { title, album, artist, genre } = req.body;
        const newSong: ISong = new Song({ title, album, artist, genre });
        const savedSong = await newSong.save();
        const stats = await getStats();
        return res.json({ song: savedSong, stats });
      } catch (error) {
        console.error(error);
        return res.status(500).json({ error: "Internal Server Error" });
      }
    });

    router.put("/api/songs/:id", async (req, res) => {
      try {
        const song = await Song.findByIdAndUpdate(req.params.id, req.body, {
          new: true,
          runValidators: true,
        });
        if (!song) {
          return res.status(404).json({ error: "Song not found" });
        }
        const stats = await getStats();
        return res.json({ song, stats });
      } catch (error) {
        console.error(error);
        return res.status(500).json({ error: "Internal Server Error" });
      }
    });

    router.delete("/api/songs/:id", async (req, res) => {
      try {
        const deletedSong = await Song.findByIdAndDelete(req.params.id);
        if (!deletedSong) {
          return res.status(404).json({ error: "Song not found" });
        }
        const stats = await getStats();
        return res.json({ message: "Song deleted successfully", stats });
      } catch (error) {
        console.error(error);
        return res.status(500).json({ error: "Internal Server Error" });
      }
    });

    router.get("/api/stats", async (req, res) => {
      try {
        const stats = await getStats();
        return res.json(stats);
      } catch (error) {
        console.error(error);
        return res.status(500).json({ error: "Internal Server Error" });
      }
    });

    export { router as songsRouter };

    const artistsStats = await Song.aggregate([
      { $group: { _id: "$artist", count: { $sum: 1 } } },
    ]);

    const totalGenres = genresStats.length;
    const totalArtists = artistsStats.length;
    const totalAlbums = await Song.distinct("album").countDocuments();

    return res.json({
      songData,
      totalSongs,
      totalGenres,
      totalArtists,
      totalAlbums,
      genresStats,
      artistsStats,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
});

export { router as songsRouter };
