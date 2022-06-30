import {getData} from "../../../Api/api";
import {ChangeEvent, Dispatch, FormEvent, useEffect, useState} from "react";
import {SearchResponse} from "../../../Api/api.types";

const languages = ["Go", "Java", "JavaScript"]

interface OwnProps {
    setSearchResponse:Dispatch<SearchResponse>
}

export const Form = ({setSearchResponse}:OwnProps): JSX.Element => {

    const sendForm = (e:FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        getData(phrase, user, lang).then((response)=>{setSearchResponse(response.data)});
    }

    useEffect(()=>{
        const phrase = localStorage.getItem('phrase');
        phrase !== null && setPhrase(phrase)
        const user = localStorage.getItem('user');
        user !== null && setUser(user)
        const lang = localStorage.getItem('lang');
        lang !== null && setLang(lang)
    },[])

    const [phrase, setPhrase]= useState<string>('');
    const [user, setUser]= useState<string>('');
    const [lang, setLang]= useState<string>(languages[0]);



    const phraseChange = (e:ChangeEvent<HTMLInputElement>)=>{
        localStorage.setItem('phrase', e.target.value)
        setPhrase(e.target.value)
    }
    const usernameChange = (e:ChangeEvent<HTMLInputElement>)=>{
        localStorage.setItem('user', e.target.value)
        setUser(e.target.value)
    }
    const languageChange = (e:ChangeEvent<HTMLSelectElement>)=>{
        localStorage.setItem('lang', e.target.value)
        setLang(e.target.value)
    }

    return <form onSubmit={(e)=>{sendForm(e)}}>
        <label>
            Phrase:
            <input name='phrase'
            onChange={(e) => phraseChange(e)}
            value={phrase}/>
        </label>
        <label>
            User Name:
            <input name='user'
            onChange={(e) => usernameChange(e)}
            value={user}/>
        </label>
        <label>
            Language:
            <select name='language'
                    onChange={(e) => languageChange(e)}
            value={lang}>
                {languages.map((lang)=>{
                        return <option value={lang}>{lang}</option>
                })}
            </select>
        </label>
        <button type="submit"> Search</button>
    </form>
}