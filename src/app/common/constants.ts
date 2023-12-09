import { CountryDetails } from "../model/model";

export const Countries: CountryDetails[] = [
    {
        name: "England",
        leagueName: "Premier League"
    },
    {
        name: "Spain",
        leagueName: "La Liga"
    },
    {
        name: "France",
        leagueName: "Ligue 1"
    },
    {
        name: "Germany",
        leagueName: "Bundesliga"
    },
    {
        name: "Italy",
        leagueName: "Serie A"
    }
]

export const BaseUrl: string = 'https://v3.football.api-sports.io/';

export const ServiceHeaders = {
    'x-rapidapi-host': 'v3.football.api-sports.io',
    'x-rapidapi-key': 'e32578c8860916c44ca8c5c16071da7e',
}