import {getData} from "../../../Api/api";
import {ChangeEvent, Dispatch, FormEvent, useEffect, useState} from "react";
import {SearchResponse} from "../../../Api/api.types";

const languages = ["Go", "Java", "JavaScript"]

interface OwnProps {
    setSearchResponse: Dispatch<SearchResponse>
}

export const Form = ({setSearchResponse}: OwnProps): JSX.Element => {

    const [phrase, setPhrase] = useState<string>('');
    const [user, setUser] = useState<string>('');
    const [lang, setLang] = useState<string>(languages[0]);

    const sendForm = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        getData(phrase, user, lang).then((response) => {
            setSearchResponse(response.data)
        });
    }

    useEffect(() => {
        const phrase = localStorage.getItem('phrase');
        phrase !== null && setPhrase(phrase)
        const user = localStorage.getItem('user');
        user !== null && setUser(user)
        const lang = localStorage.getItem('lang');
        lang !== null && setLang(lang)
    }, [])


    const phraseChange = (e: ChangeEvent<HTMLInputElement>) => {
        localStorage.setItem('phrase', e.target.value)
        setPhrase(e.target.value)
    }
    const userChange = (e: ChangeEvent<HTMLInputElement>) => {
        localStorage.setItem('user', e.target.value)
        setUser(e.target.value)
    }
    const langChange = (e: ChangeEvent<HTMLSelectElement>) => {
        localStorage.setItem('lang', e.target.value)
        setLang(e.target.value)
    }

    return <form onSubmit={(e) => {
        sendForm(e)
    }}>
        <label>
            Phrase:
            <input name='phrase'
                   onChange={(e) => phraseChange(e)}
                   value={phrase}
                   required/>
        </label>
        <label>
            User:
            <input name='user'
                   onChange={(e) => userChange(e)}
                   value={user}
                   required/>
        </label>
        <label>
            Language:
            <select name='language'
                    onChange={(e) => langChange(e)}
                    value={lang}
                    required>
                {languages.map((lang) => {
                    return <option value={lang}>{lang}</option>
                })}
            </select>
        </label>
        <button type="submit"> Search</button>
    </form>
}