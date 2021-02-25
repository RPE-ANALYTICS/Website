import React from 'react';

export default function Advert({data}) {
    // console.log(oneAdvert.map(d => d.title))
    return (
        <div>
            <p>{data.title}</p>
        </div>
    )
}
