import React from 'react'
import maleImg from '../Assets/Male.png'
import programImg from '../Assets/Programmer.png'
import saleImg from '../Assets/Chart.png'
import appleImg from '../Assets/Apple.png'
import constructImg from '../Assets/Construction.png'
import itImg from '../Assets/IT.png'
import estateImg from '../Assets/Sale.png'
import contentImg from '../Assets/Notebook.png'
import Card from './Card'
const Categories = () => {

    const data = [

        {
            title: "Design & Creative",
            img: maleImg,
            subtitle: "(653)",

        },
        {
            title: "Design & Development",
            img: programImg,
            subtitle: "(658)",

        },
        {
            title: "Sales & Marketing",
            img: saleImg,
            subtitle: "(658)",

        },
        {
            title: "Mobile Application",
            img: appleImg,
            subtitle: "(658)",
        },
        {
            title: "Construction",
            img: constructImg,
            subtitle: "(658)",
        },
        {
            title: "Information Technology",
            img: itImg,
            subtitle: "(658)",

        },
        {
            title: "Real Estate",
            img: estateImg,
            subtitle: "(658)",
        },
        {
            title: "Content Writer",
            img: contentImg,
            subtitle: "(658)",
        },


    ]

    return (
        <>

            <div className="container pt-5">
                <h3 className="text-center mt-5" style={{ color: "#ff1e6d", fontWeight: "bold" }}>Featured Tours Packages</h3>
                <h1 className="text-center mb-5" style={{ color: "#003366", fontWeight: "bold" }}>Browse Top Categories</h1>

                <div className="row g-4"> {/* g-4 adds the spacing (gutter) seen in your reference */}
                    {data.map((item, index) => (
                        <div className="col-xl-3 col-lg-4 col-sm-6" key={index}>
                            <Card item={item} />
                        </div>
                    ))}
                </div>
            </div>

        </>

    )



}


export default Categories
