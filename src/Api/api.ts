import axios, {AxiosPromise} from "axios";
import {SearchResponse} from "./api.types";

const gitInstance = axios.create({
    baseURL: 'https://api.github.com/',
});

export const getData = (phrase: string, username: string, lang: string, perPage: number, page: number): AxiosPromise<SearchResponse> => {

    const createUrl = () => {
        phrase = phrase.split(' ').join('+');
        return `${phrase} user:${username} language:${lang} page%3A3&per_page=${perPage}&page=${page}`
    }

    return gitInstance.get(`/search/code?q=${createUrl()}`)
}
