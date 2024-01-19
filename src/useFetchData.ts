import {useState} from "react";
import axios from "axios";
import {Models} from "./models";

const useFetchData = () => {
    const [error, setError] = useState<Error | null>(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState<Models[] | null>();

    const fetchData = async (lang: string) => {
        try {
            const response = await axios.get(`data_${lang}.json`);
            setIsLoaded(true);
            setItems(response.data.filter((item: any) => item.wrapperType === 'track'));
        } catch (error) {
            setIsLoaded(true);
            setError(error as Error);
        }
    };

    return{isLoaded, items, error, fetchData};
};

export default useFetchData;