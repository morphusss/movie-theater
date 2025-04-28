import SearchLogo from "../../assets/svg/search.svg"

import "./search.scss"

type Props = {
    holder: string,
    valueOfFilter: string,
}

export function Search(props: Props) {

    return(
        <>
        <section className="search">
            <input 
                type="text"
                placeholder={props.holder}
                className="search-input"
            />
            <img src={SearchLogo} className="search-logo" />
        </section>
        </>
    )
} 