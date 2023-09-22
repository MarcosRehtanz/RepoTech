import React from "react"

export default ({ params }) => {

    return (
        <main>
            <h1>I'm a post</h1>
            <h2>{params.slug}</h2>
        </main>
    )

}