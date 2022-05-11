import React from 'react'

function Pagination({ postPerPage, totalPosts,paginate }) {
    const pageNumbers = []
    for (let i = 1; i <= Math.ceil(totalPosts / postPerPage); i++) {
        pageNumbers.push(i)
    }
    return (
        <nav>
            <ul>
                {pageNumbers.map(number => {
                    return (
                        <div className="pagination" key={number}>
                            <li onClick={()=>paginate(number)} >
                                <a  >{number}</a>
                            </li>
                        </div>
                    )

                })}
            </ul>

        </nav>
    )
}

export default Pagination