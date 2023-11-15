import React, { useState } from "react";
import moment from 'moment';
import useTable from "src/hooks/useTable";
import TablePaginator from "src/components/TablePaginator";
import randomID from "src/utils/randomID";

const TableWithPagination = ({ titles, data, rowsPerPage }) => {
  const [page, setPage] = useState(1);
  const { total, slice, range } = useTable(data, page, rowsPerPage);
  return (
    <div className="flex flex-col items-center gap-8">
      <table className='w-full'>
        <thead>
            <tr className='text-sm font-semibold'>
            {
                titles.map((titles) => <td key={randomID()} className='py-4 border-b border-purple-500'>{titles}</td>)
            }
          </tr>
        </thead>
        <tbody>
          {slice.map((el) => (
            <tr className='text-sm text-gray-500' key={randomID()}>
              <td className='py-4'>{el.item.name}</td>
              <td className='py-4'>{el.type}</td>
              <td className='py-4'>{moment(el.date).format('DD/M/YYYY')}</td>
              <td className='py-4'>{el.place}</td>
              <td className='py-4'>{el.responsable}</td>
              <td className='py-4'></td>
            </tr>
          ))}
        </tbody>
      </table>
      <TablePaginator total={total} range={range} slice={slice} setPage={setPage} page={page} rowsPerPage={rowsPerPage} />
    </div>
  );
};

export default TableWithPagination;