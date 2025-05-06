import { Dispatch, SetStateAction } from "react";
import "./Pagination.scss"

type Props = {
    totalPosts: number;
    postPerPage: number;
    setCurrentPage: Dispatch<SetStateAction<number>>;
}

export function Pagination(props: Props) {
    let pages = [];
    const setCurrentPage = props.setCurrentPage;

    for (let i: number = 1; i <= Math.ceil(props.totalPosts/props.postPerPage); i++){
        pages.push(i);
    }

    return (
        <>
        <section className="pagination">
            {pages.map((page, index) => {
                return(
                    <button className="page-button" key={index} onClick={() => setCurrentPage(page)}>{page}</button>
                )
            })}
        </section>
        </>
    )
}