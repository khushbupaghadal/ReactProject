import React, { useEffect } from 'react'
import { HOC } from './HOC'
import DataTable from 'react-data-table-component';
import { getapi } from '../Redux/Action/album';
import { useDispatch, useSelector } from 'react-redux';

const Albums = () => {
  let dispatch = useDispatch();
  let state = useSelector((store) => store.albumapi);

  useEffect(() => {
    dispatch(getapi());
  }, []);
  console.log(state);
  const col1 = [
    {
      name: "albumName",
      selector: (row) => row.albumName,
      sortable : true
    },
    {
      name: "alternativeAlbumName",
      selector: (row) => row.alternativeAlbumName,
      sortable : true
    },
    {
      name: "releaseDate",
      selector: (row) => row.releaseDate,
      sortable : true
    },
    {
      name: "creationDate",
      selector: (row) => row.creationDate,
      sortable : true
    }
  ];
  return (
    <>
      <div className='mt-5'>
          <DataTable title="Album" columns={col1} data={state} pagination />
      </div>
    </>
  )
}

export default HOC(Albums)
