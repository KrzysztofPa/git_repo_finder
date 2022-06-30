import {SearchResponse} from "../../../Api/api.types";

interface OwnProps {
    searchResponse: SearchResponse | undefined
}

export const Pagination = ({searchResponse}: OwnProps): JSX.Element => {

    if (undefined === searchResponse) {
        return <></>
    }

    return <>total: {searchResponse.total_count}</>
}