import axios, {AxiosPromise} from "axios";
import {SearchResponse} from "./api.types";

const token = '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';

const gitInstance = axios.create({
    baseURL: 'https://api.github.com/',
});

export const getData = (phrase: string,username: string, lang: string):AxiosPromise<SearchResponse>=>{

    const createUrl = ()=>{
        phrase = phrase.split(' ').join('+');
        const url = `${phrase} user:${username} language:${lang}`
        const maxQueryLength = 256;
        if(url.length > maxQueryLength){
            console.log('error');
        }
        return url
    }

    return gitInstance.get(`/search/repositories?q=${createUrl()}`)
}
