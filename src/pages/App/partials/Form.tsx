import {getData} from "../../../Api/api";
import {ChangeEvent, Dispatch, FormEvent, useEffect, useState} from "react";
import {SearchResponse} from "../../../Api/api.types";
import {
    Alert,
    Box,
    Button,
    CircularProgress,
    FormControl,
    Grid,
    MenuItem,
    Select,
    SelectChangeEvent,
    TextField, Typography
} from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';


const languages = ["Go", "Java", "JavaScript"]

interface OwnProps {
    setSearchResponse: Dispatch<SearchResponse | "error">
}

export const Form = ({setSearchResponse}: OwnProps): JSX.Element => {

    const [isFormErrorVisible, setIsFormErrorVisible] = useState<boolean>(false);
    const [phrase, setPhrase] = useState<string>('');
    const [user, setUser] = useState<string>('');
    const [lang, setLang] = useState<string>(languages[0]);
    const [isLoading, setIsLoading] = useState<boolean>(false)

    const sendForm = () => {
        if (0 === phrase.length || 0 === user.length) {
            setIsFormErrorVisible(true);
            return;
        }

        setIsFormErrorVisible(false);
        setIsLoading(true)
        getData(phrase, user, lang)
            .then((response) => {
                setSearchResponse(response.data)
            })
            .catch(() => {
                setSearchResponse("error")
            })
            .finally(() => {
                setIsLoading(false)
            })
        ;
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
    const langChange = (e: SelectChangeEvent<string>) => {
        localStorage.setItem('lang', e.target.value)
        setLang(e.target.value)
    }

    return <Box component="form" noValidate onSubmit={sendForm} sx={{mt: 3}}>
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <TextField
                    autoFocus
                    required
                    fullWidth
                    id="Phrase"
                    label="Phrase"
                    name="Phrase"
                    onChange={(e: ChangeEvent<HTMLInputElement>) => phraseChange(e)}
                    value={phrase}
                />
            </Grid>
            <Grid item xs={12} sm={6}>
                <TextField
                    required
                    fullWidth
                    id="User"
                    label="User"
                    name="User"
                    onChange={(e: ChangeEvent<HTMLInputElement>) => userChange(e)}
                    value={user}
                />
            </Grid>
            <Grid item xs={12} sm={6}>
                <Select
                    required
                    fullWidth
                    name="Language"
                    label="Language"
                    id="Language"
                    onChange={(e) => langChange(e)}
                    value={lang}
                >
                    {languages.map((lang) => {
                        return <MenuItem value={lang}>{lang}</MenuItem>
                    })}
                </Select>
            </Grid>
        </Grid>
        {isFormErrorVisible && <Alert severity="error">something went wrong, fill all the fields</Alert>}
        <Button
            onClick={() => sendForm()}
            fullWidth
            variant="contained"
            size="large"
            sx={{mt: 3, mb: 2, display: "flex"}}

        >
            {isLoading ? <CircularProgress/>
                : <Typography sx={{mt: .4, mb: .7,}} variant="body1" gutterBottom component="div">Search <SearchIcon/>
                </Typography>}
        </Button>
        <Grid container justifyContent="flex-end">
            <Grid item>
            </Grid>
        </Grid>
    </Box>
}