import axios, {AxiosPromise} from "axios";
import {SearchResponse} from "./api.types";

const gitInstance = axios.create({
    baseURL: 'https://api.github.com/',
});

export const getData = (phrase: string, username: string, lang: string): AxiosPromise<SearchResponse> => {

    const createUrl = () => {
        phrase = phrase.split(' ').join('+');
        const url = `${phrase} user:${username} language:${lang}`
        const maxQueryLength = 256;
        return url
    }

    return gitInstance.get(`/search/repositories?q=${createUrl()}`)
}