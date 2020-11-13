import React, {useState} from 'react';
import './App.css';
import { SearchForm} from "./components/searchForm/searchForm";
import {getString} from "./consts/Strings";
import {SearchTransportResponse} from "./models/searchTransport";
import { SearchPartResponse} from "./models/searchPart";
import {OPTIONS, SEARCH_PART_FIELDS, SEARCH_TRANSPORT_FIELDS} from "./consts/consts";

function App() {
    const [searchTransportResponse, setSearchTransportResponse] = useState<SearchTransportResponse[]>();
    const [searchPartResponse, setSearchPartResponse] = useState<SearchPartResponse>();

    const onResetSearchTransport = () => setSearchTransportResponse(undefined)
    const onResetSearchPart = () => setSearchPartResponse(undefined)
    const onSubmitSearchTransport = async (values: object): Promise<boolean> => {
        setSearchTransportResponse([{
            manufacturer: 'בדיקה',
            yearOfProduction: 2222,
            vin: 'בדיקה',
            commercialAlias: 'בדיקה'
        },
            {
                manufacturer: 'בדיקה 2',
                yearOfProduction: 2222,
                vin: 'בדיקה 2',
                commercialAlias: 'בדיקה 2'
            }]);
        return true;
    }
    const onSubmitSearchPart = async (values: object): Promise<boolean> => {
        setSearchPartResponse({
            license_plate: '2222',
            vin: 'בדיקה',

            parts: [
                {
                    name: 'בדיקה 1',
                    serial_number: '1232',
                    image: 'https://www.communityguides.net/wp-content/uploads/2019/03/Questions-To-Ask-Before-Buying-From-Your-Auto-Body-Parts-Supplier-1-218x150.jpg'
                },
                {
                    name: 'בדיקה 2',
                    serial_number: '1232321321',
                    image: 'https://c7.alamy.com/comp/F99X7W/the-most-popular-spare-parts-for-car-F99X7W.jpg'
                }
            ],

        });
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
