import React, { useEffect } from 'react'
import { HOC } from './HOC'
import { useDispatch, useSelector } from 'react-redux';
import DataTable from 'react-data-table-component';
import { getapi } from '../Redux/Action/recentActivities';


const RecentActivities = () => {
  let dispatch = useDispatch();
    let state = useSelector((state) => state.recentApi);
  
    useEffect(() => {
      dispatch(getapi());
    }, []);
    console.log(state);
  
    const col1 = [
      {
        name: "id",
        selector: (row) => row.id,
        sortable : true
      },
      {
        name: "createdDate",
        selector: (row) => row.createdDate,
        sortable : true
      },
      {
        name: "updatedDate",
        selector: (row) => row.updatedDate,
        sortable : true
      },
      {
        name: "type",
        selector: (row) => row.type,
        sortable : true
      },
      {
        name: "title",
        selector: (row) => row.title,
        sortable : true
      }
    ];
  return (
    <>
        <div className='mt-5'>
          <DataTable title="recent activity" columns={col1} data={state.recentActivity} pagination />
        </div>
    </>
  )
}

export default HOC(RecentActivities)
