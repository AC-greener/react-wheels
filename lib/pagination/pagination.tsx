import React, { useState, useMemo } from 'react';
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

  const totalPage = useMemo(() => Math.ceil(total / pageSize), [total, pageSize]);
  const startPage = 1;
  const endPage = totalPage;
  const pageNumbers = useMemo(
    () => Array.from({ length: endPage - startPage + 1 }, (_, i) => startPage + i),
    [startPage, endPage]
  );
  console.log('totalPage :>> ', totalPage);
  console.log('startPage :>> ', startPage);
  console.log('endPage :>> ', endPage);
  console.log('pageNumbers :>> ', pageNumbers);
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
