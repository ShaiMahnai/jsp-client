import axios from 'axios';
import {SearchTransportRequest, SearchTransportResponse} from "../models/searchTransport";
import {SearchPartRequest, SearchPartResponse} from "../models/searchPart";
import {API_ADDRESS} from "../consts/consts";




export const searchTransport = async (searchTransportRequest: SearchTransportRequest): Promise<SearchTransportResponse[]> => {
    try {
        const res = await axios.post(`${API_ADDRESS}/search_tahbura`, searchTransportRequest);
        console.log(res);
        return res.data
    } catch (e) {
        console.log(`Exception: ${e}`);
        return [];
    }

}
export const searchPart = async (searchPartRequest: SearchPartRequest): Promise<SearchPartResponse> => {
    try {
        const res = await axios.post(`${API_ADDRESS}/search_part_api`, searchPartRequest);
        console.log(res);
        return res.data
    } catch (e) {
        console.log(`Exception: ${e}`);
        return {license_plate: searchPartRequest.license_plate, parts: [], vin: searchPartRequest.vin};
    }

}