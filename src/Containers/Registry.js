import React from 'react'
import Nav from '../Containers/Nav'
import '../Styles/Registry.css'

export default function Registry() {
    //href="https://www.target.com/gift-registry/gift/the-future-glennans"
    return (
        <>
            <Nav />
            <div className="registryContainer animate__animated animate__slideInLeft">
                <h1 className="link">
                    <a href="https://www.target.com/gift-registry/gift/the-future-glennans" alt="target">Target</a>
                </h1>
                <h1 className="link">
                    <a href="https://www.amazon.com/wedding/victoria-dangelo-john-glennan--october-2022/registry/3JIFEPXJ8PHZN" alt="amazon">Amazon</a>
                </h1>
            </div>
        </>
    )
}
