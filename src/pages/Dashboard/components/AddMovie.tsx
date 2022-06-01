import axios from 'axios';
import React, { FC, useState } from 'react';
import { AddMovieProps, Movie } from './types';

export const AddMovie: FC<AddMovieProps> = ({ getMovies }) => {
    const [movie, setMovie] = useState<Movie>({ title: '', duration: 0 });

    function handleChange(e: React.FormEvent<HTMLInputElement>): void {
        const { value, id } = e.currentTarget;
        setMovie({ ...movie, [id]: value });
    }

    async function handleSubmit() {
        try {
            await axios.post('/api/movies', movie);
            getMovies();
        } catch (err) {
            console.log(err);
        }
    }
    return (
        <form className="form-inline">
            <div className="form-group mx-sm-3 mb-2">
                <label htmlFor="title" className="sr-only">
                    Title
                </label>
                <input
                    type="text"
                    className="form-control"
                    id="title"
                    placeholder="Title"
                    onChange={e => {
                        handleChange(e);
                    }}
                    minLength={1}
                />
            </div>
            <div className="form-group mx-sm-3 mb-2">
                <label htmlFor="duration" className="sr-only">
                    Duration
                </label>
                <input
                    type="number"
                    className="form-control"
                    id="duration"
                    min="300"
                    max="21600"
                    placeholder="Duration"
                    onChange={e => {
                        handleChange(e);
                    }}
                />
            </div>
            <button
                type="submit"
                className="btn btn-primary mb-2"
                onClick={e => {
                    e.preventDefault();
                    handleSubmit();
                }}
            >
                Add Movie
            </button>
        </form>
    );
};
