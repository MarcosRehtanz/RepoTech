import React from "react"

export default ({ params }) => {

    return (
        <main>
            <h1>I'm a post</h1>
            <h2>{params.slug}</h2>
            <h3>I wanna get married to Juan</h3>
        </main>
    )

}