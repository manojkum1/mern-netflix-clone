import express from "express";
import {
  getMovieDetails,
  getTrailers,
  getTrendingMovie,
  getSimilarMovies,
  getMoviesByCategory,
} from "../controllers/movie.controller.js";

const router = express.Router();

router.get("/trending", getTrendingMovie);
router.get("/:id/trailers", getTrailers);
router.get("/:id/details", getMovieDetails);
router.get("/:id/similar", getSimilarMovies);
router.get("/:category", getMoviesByCategory);

export default router;
