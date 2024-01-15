import React, { useEffect } from 'react'
import { HOC } from './HOC'
import { useDispatch, useSelector } from 'react-redux';
import DataTable from 'react-data-table-component';
import { getapi } from '../Redux/Action/projectaction';
import { Tab, Tabs } from 'react-bootstrap';

const Project = () => {
  let dispatch = useDispatch();
  let state = useSelector(store => store.projectApi);

  useEffect(() => {
    dispatch(getapi())
  }, [])
  console.log(state);


  const columns = [
    {
      id: 1,
      name: "albumId",
      selector: (row) => row.albumId
    },
    {
      id: 2,
      name: "albumName",
      selector: (row) => row.albumName
    }
  ];

  const columns1 = [
    {
      id: 1,
      name: "licenceId",
      selector: (row) => row.licenceId
    },
    {
      id: 2,
      name: "licenceName",
      selector: (row) => row.licenceName
    }
  ];
  const columns3 = [
    {
      id: 1,
      name: "singleId",
      selector: (row) => row.singleId
    },
    {
      id: 2,
      name: "songTitle",
      selector: (row) => row.songTitle
    }
  ];
  console.log(state);
  return (
    <>
      <div className='container' style={{marginTop: "70px"}}>
        <Tabs
          defaultActiveKey="profile"
          id="uncontrolled-tab-example"
          className="mb-3"
        >
          <Tab eventKey="albumsResponses" title="albumsResponses">
            <DataTable 
              title="albums Responses"
              columns={columns}
              data={state.albumsResponses}
              defaultSortFieldId={1}
              pagination
            />
          </Tab>
          <Tab eventKey="licencesResponses" title="licencesResponses">
          <DataTable
              title="licences Responses"
              columns={columns1}
              data={state.licencesResponses}
              defaultSortFieldId={1}
              pagination
            />
          </Tab>
          <Tab eventKey="singlesResponses" title="singlesResponses">
          <DataTable
              title="singles Responses"
              columns={columns3}
              data={state.singlesResponses}
              defaultSortFieldId={1}
              pagination
            />
          </Tab>
        </Tabs>
      </div>
    </>
  )
}

export default HOC(Project)
