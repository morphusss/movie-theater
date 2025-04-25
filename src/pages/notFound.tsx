import notFoundImg from "../assets/notFound.jpeg"

export function notFoundPage() {

    return(
        <>
        <section>
            Oh Shoot! You're in the wrong place buddy
            <img src={notFoundImg} alt="" />
        </section>
        </>
    )

}