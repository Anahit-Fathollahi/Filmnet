import { useState, useEffect } from "react";
import { useAppDispatch } from "../app/hooks";
import { fetchFilms } from "../store/films/action";

const useInfiniteScroll = () => {
    const [isFetching, setIsFetching] = useState(true);
    const [offset, setOffset] = useState(0);
    const dispatch = useAppDispatch();
    function handleScroll() {
        const scrollTop = window.innerHeight + document.documentElement.scrollTop;
        const offsetHeight = document.documentElement.offsetHeight;
        if (scrollTop - offsetHeight <= 1 && scrollTop - offsetHeight >= -1) {
            setTimeout(() => setOffset((perValue) => perValue + 24), 500);
            setIsFetching(true);
        } else {
            return null;
        }
    }
    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        dispatch(fetchFilms(offset));
    }, [isFetching, offset]);

    return [isFetching, offset, setOffset];
};

export default useInfiniteScroll;
