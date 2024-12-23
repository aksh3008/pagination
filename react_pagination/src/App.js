import logo from './logo.svg';
import './App.css';
import Pagination from './components/pagination';
import Table from './components/table';

import { getUsers, getLength } from './api/users';
import { useState } from 'react';
import SelectLimit from './components/selectLimit';

function App() {
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(5);

  const totalPage = Math.ceil(getLength() / limit); // Assuming getLength() is defined
  let pageNo = page;

  // Ensure page is within valid range
  if (page > totalPage && totalPage > 0) {
      setPage(totalPage);
      pageNo = totalPage;
  }

  function handlePageChange(value) {
      if (value === "&laquo;" || value === "...") {
          setPage(1);
      } else if (value === "&lsaquo;") {
          if (page > 1) {
              setPage(page - 1);
          }
      } else if (value === "&rsaquo;") {
          if (page < totalPage) {
              setPage(page + 1);
          }
      } else if (value === "&raquo;" || value === "...") {
          setPage(totalPage);
      } else {
          setPage(value);
      }
  }

  return (
      <div className="container">
          <Table users={getUsers(page, limit)} />
          <div className='pagination-container'>
              <SelectLimit onLimitChange={setLimit} />
          </div>
          <Pagination
              totalPage={totalPage}
              page={pageNo}
              limit={limit}
              siblings={1}
              onPageChange={handlePageChange}
          />
      </div>
  );
}

export default App;


