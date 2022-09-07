import React from 'react'
import Nav from '../Containers/Nav'
import '../Styles/Registry.css'
import targets from '../images/target.png'
import amazons from '../images/amazon.png'
 
export default function Registry() {
    //href="https://www.target.com/gift-registry/gift/the-future-glennans"
    return (
        <>
            <Nav />
                <div className="registryContainer animate__animated animate__slideInLeft">
                    <h1 className="link">
                        <a href="https://www.target.com/gift-registry/gift/the-future-glennans" alt="t"><img src={targets} style={{width: "200px", height: "250px"}} alt='target' /> </a>
                    </h1>
                    <h1 className="link">
                        <a href="https://www.amazon.com/wedding/victoria-dangelo-john-glennan--october-2022/registry/3JIFEPXJ8PHZN"  alt="a"><img style={{width: "300px", height: "250px"}} src={amazons} alt="amazon" /> </a>
                    </h1>
                </div>
        </>
    )
}
