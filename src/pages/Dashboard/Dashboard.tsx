import { PageContent } from '@components/layout';
import { Text } from '@medly-components/core';
import axios from 'axios';
import { FC, useCallback, useEffect, useState } from 'react';
import { MoviesTable, AddMovie } from './components';
import { DashboardProps, IMovie } from './types';

export const Dashboard: FC<DashboardProps> = ({ isLoading }) => {
    const [movies, setMovies] = useState<IMovie[]>([]);

    const getMovies = useCallback(async () => {
        try {
            const res = await axios.get('/api/movies');
            setMovies(res.data);
        } catch (err) {
            console.log(err);
        }
    }, []);

    useEffect(() => {
        getMovies();
    }, []);

    return (
        <PageContent isLoading={isLoading}>
            <Text textWeight="Strong" textVariant="body1">
                Add Movie
            </Text>
            <AddMovie getMovies={getMovies} />
            <Text textWeight="Strong" textVariant="body1">
                Movies List
            </Text>
            <MoviesTable movies={movies} />
        </PageContent>
    );
};
Dashboard.displayName = 'Dashboard';
