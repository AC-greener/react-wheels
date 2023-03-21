import React, { useState } from 'react';
import './pagination.scss';

interface IPaginationProps {
  pageSize: number;
  total: number;
  current: number;
  onChange: (current: number, pageSize: number) => void;
}

const Pagination = ({ pageSize, total, current, onChange }: IPaginationProps): JSX.Element => {
  const [currentPage, setCurrentPage] = useState<number>(current);

  const handleClick = (page: number) => {
    setCurrentPage(page);
    onChange(page, pageSize);
  };

  const totalPage = Math.ceil(total / pageSize);
  const startPage = Math.max(current - 2, 1);
  const endPage = Math.min(current + 2, totalPage);
  const pageNumbers = Array.from(
    { length: endPage - startPage + 1 },
    (_, i) => startPage + i
  );
  return (
    <div className="pagination">
      {pageNumbers.map((page) => (
        <div
          key={page}
          className={`page ${page === currentPage ? 'active' : ''}`}
          onClick={() => handleClick(page)}
        >
          {page}
        </div>
      ))}
    </div>
  );
};

export default Pagination;
