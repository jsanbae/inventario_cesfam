import React, { useEffect } from "react";
import { RiArrowLeftLine, RiArrowRightLine } from "react-icons/ri";
import randomID from "../utils/randomID";

const TablePaginator = ({ range, setPage, page, slice, total, rowsPerPage }) => {
  
  useEffect(() => {
    if (slice.length < 1 && page !== 1) {
      setPage(page - 1);
    }
  }, [slice, page, setPage]);

  const recordFrom = (page - 1) * rowsPerPage + 1;
  const recordTo = (page * rowsPerPage) > total ? total : (page * rowsPerPage);
  
  return (
    <nav className="flex flex-col items-center justify-between gap-3" aria-label="Page navigation">
      
      <span className="text-sm text-gray-700 dark:text-gray-400">
        Mostrando del <span className="font-semibold text-gray-900 dark:text-white">{recordFrom}</span> al <span className="font-semibold text-gray-900 dark:text-white">{recordTo}</span> de <span className="font-semibold text-gray-900 dark:text-white">{total}</span> Registros
      </span>
      
      <ul className="inline-flex -space-x-px text-base h-10">
        <li>
          <button onClick={() => setPage(page == 1 ? 1 : page - 1)} 
             className="flex items-center justify-center px-4 h-10 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
          >
              <RiArrowLeftLine />
          </button>
        </li>
      {range.map((page_nro, index) => (
          <li key={randomID()}>
            <button onClick={() => setPage(page_nro)} 
              className={`flex items-center justify-center px-4 h-10 leading-tight border border-gray-300 hover:bg-gray-100 hover:text-gray-700 hover:border-gray-300 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white ${page === page_nro ? 'bg-purple-600 text-white border-purple-800' : 'text-gray-500 bg-white'}`}
            >
              {page_nro}
            </button>
          </li>
      ))}
        <li>
          <button onClick={() => setPage(page == range.length ? page : page + 1)}
             className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
          >
            <RiArrowRightLine />
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default TablePaginator;