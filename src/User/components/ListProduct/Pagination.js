import React from 'react';
import PropTypes from 'prop-types';
import {BiChevronLeft} from "react-icons/bi";
import {BiChevronRight} from "react-icons/bi";

Pagination.propTypes = {
    pagination: PropTypes.object.isRequired,
    onPageChange: PropTypes.func,
};

Pagination.defaultProps = {
    onPageChange: null,
};

function Pagination(props) {
    const { pagination, onPageChange } = props;
    const { _page, _limit, _totalRows } =pagination;
    const totalPages = Math.ceil(_totalRows / _limit);
    function handlePageChange(newPage) {
        if (onPageChange) {
            onPageChange(newPage);
        }
    }
    return (
        <div>
            <button
                disabled={_page <= 1}
                onClick={()=> handlePageChange(_page - 1)}
            >
                <BiChevronLeft />
            </button>

            <button
                disabled={_page >= totalPages}
                onClick={()=> handlePageChange(_page + 1)}
            >
                <BiChevronRight />
            </button>
        </div>
    );
}

export default Pagination;