import React, {useState} from 'react';
import './App.css';
import { SearchForm} from "./components/searchForm/searchForm";
import {getString} from "./consts/Strings";
import {SearchTransportRequest, SearchTransportResponse} from "./models/searchTransport";
import {SearchPartRequest, SearchPartResponse} from "./models/searchPart";
import {OPTIONS, SEARCH_PART_FIELDS, SEARCH_TRANSPORT_FIELDS} from "./consts/consts";
import {searchPart, searchTransport} from "./api/httpService";

function App() {
    const [searchTransportResponse, setSearchTransportResponse] = useState<SearchTransportResponse[]>();
    const [searchPartResponse, setSearchPartResponse] = useState<SearchPartResponse>();

    const onResetSearchTransport = () => setSearchTransportResponse(undefined)
    const onResetSearchPart = () => setSearchPartResponse(undefined)
    const onSubmitSearchTransport = async (values: SearchTransportRequest): Promise<boolean> => {
        const res = await searchTransport(values);
        setSearchTransportResponse(res);

        return true;
    }
    const onSubmitSearchPart = async (values: SearchPartRequest): Promise<boolean> => {
        const res = await searchPart(values);
        setSearchPartResponse(res);

        return true;
    }

    return (
        <div className="App">

            <SearchForm options={OPTIONS}
                        fields={SEARCH_TRANSPORT_FIELDS}
                        title={getString('searchTransportTitle')}
                        onSubmit={onSubmitSearchTransport}
                        results={searchTransportResponse}
                        onReset={onResetSearchTransport}
            />
            <SearchForm options={OPTIONS}
                        fields={SEARCH_PART_FIELDS}
                        title={getString('searchPartTitle')}
                        onSubmit={onSubmitSearchPart}
                        results={searchPartResponse}
                        onReset={onResetSearchPart}
            />

        </div>
    );

}


export default App;
