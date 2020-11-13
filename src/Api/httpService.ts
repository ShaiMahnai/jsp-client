import axios from 'axios';
import {SearchTransportRequest, SearchTransportResponse} from "../models/searchTransport";
import {SearchPartRequest, SearchPartResponse} from "../models/searchPart";

const API_ADDRESS = '';


const searchTransport = async (searchTransportRequest: SearchTransportRequest): Promise<SearchTransportResponse> => {
    const res = await axios.get(`${API_ADDRESS}/search_tahbura`, {params: searchTransportRequest});
    console.log(res);
    return res.data

}
const searchPart = async (searchPartRequest: SearchPartRequest): Promise<SearchPartResponse> => {
    const res = await axios.get(`${API_ADDRESS}/search_part_api`, {params: searchPartRequest});
    console.log(res);
    return res.data

}