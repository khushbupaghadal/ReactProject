import React, { useEffect, useState } from 'react'
import { HOC } from './HOC'
import { useDispatch, useSelector } from 'react-redux'
import { addApi, deleteApi, editApi, getapi } from '../Redux/Action/action'
import CloseIcon from '@mui/icons-material/Close'
import { Button, Card, Dialog, DialogActions, DialogContent, DialogTitle, IconButton, styled } from '@mui/material'
import { ListGroup, Modal } from 'react-bootstrap'


const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));


const Profile = (props) => {

  const [open, setOpen] = React.useState(false);

  const [show, setShow] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handleClosebank = () => setShow(false);
  const handleShow = () => setShow(true);
  let [obj, setobj] = useState({})
  let [blankobj, setblankobj] = useState({})
  let [blankob, setblankob] = useState({})
  let [bankobj, setbankobj] = useState({})
  let [bankDetails, setbankDetails] = useState([]);
  let [bankDetailsshow, setbankDetailsshow] = useState([]);
  let state = useSelector((state) => state)
  let dispatch = useDispatch()

  useEffect(() => {
    dispatch(getapi())
  }, [])

  let getData = (e) =>{
      obj[e.target.name] = e.target.value;
      blankobj[e.target.name] = ""

    setobj({...obj})
    setblankobj({...blankobj})
  }

  let bankData = (e) =>{
    bankobj[e.target.name] = e.target.value
    blankob[e.target.name] = ""

    setbankobj({...bankobj})
    setblankob({...blankob})
  }

  

  let SubmitData = () =>{
    obj.idNumber = "string"
    obj.profileImageBase64= "string"
    obj.role = [
      {
        "profileRoleAssociateId": 0,
        "profileId": 0,
        "roleType": 1
      }
    ]
    obj.advanceType= 1
    obj.advanceAmount=0
    obj.contractStartDate= "2023-12-01T05:29:37.750Z"
    obj.contractEndDate= "2023-12-01T05:29:37.750Z"
    obj.contractTotalMonths= 0
    obj.userId= 0
    obj.alternativeName= "string"
    obj.chineseName= "string"
    obj.artistName = 'string'
    bankDetails.push(bankobj);
    setbankDetails([...bankDetails]);
    obj.bankDetails = bankDetails;
  
    if(obj.id){
      obj.bankDetails = obj.profileBankAssociateResponses
      obj.role = obj.profileRoleAssociateResponses
      dispatch(editApi(obj))
    }
    
    else{
      dispatch(addApi(obj))
    }
    
    setobj({...blankobj})
    setbankobj({...blankob})
    handleClose()
  }
  
  let deleteId = (id) =>{
    dispatch(deleteApi(id))
  }
  
  let editid = (x) =>{
    setobj({...x})
    handleClickOpen()
  }


  let ShowData = (data) => {
    handleShow()
    bankDetailsshow = { ...bankDetailsshow, data }
    setbankDetailsshow({ ...bankDetailsshow });
  }

  return (
    <>
      <div className=' w-50 mx-auto'>
      <Button variant="outlined" onClick={handleClickOpen} style={{marginTop : "80px"}} className='mx-auto'>
        Open dialog
      </Button>
      <BootstrapDialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
        <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title"> Add Data </DialogTitle>
        <IconButton aria-label="close" onClick={handleClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}>
        <CloseIcon />
        </IconButton>
        <DialogContent dividers>
        <form action="">
          <div className=' row'>
            <h3><u>Personal Details</u></h3>
            <div className=' col'>
              <label htmlFor="displayName" className='w-100 fw-bold'>Display Name:</label>
              <input type="text"  name='displayName' id='displayName' className='w-100' value={obj.displayName ?? ""} onChange={getData}/>
            </div>
          </div>

          <div className='row mt-3'>
              <div className=' col'>
                <label htmlFor="address" className='w-100 fw-bold'>Address:</label>
                <input type="text"  name='address' id='address' className=' w-100 px-2 py-2' value={obj.address ?? ""} onChange={getData}/>
              </div>
          </div>
          <div className=' row'>
              <div className=' col'>
                <label htmlFor="birthdate" className='w-100 fw-bold'>Birthdate:</label>
                <input type="date"  name='birthdate' id='birthdate' className=' w-100' value={obj.birthdate ?? ""} onChange={getData}/>
              </div>

              <div className=' col'>
                <label htmlFor="email" className='w-100 fw-bold'>Email:</label>
                <input type="email"  name='email' id='email' className=' w-100' value={obj.email ?? ""} onChange={getData}/>
              </div>
          </div>

          <div className=' row mt-3'>
            <h3><u>Bank Details</u></h3>
            <div className=' col'>
                <label htmlFor="profileBankAssociateId" className='w-100 fw-bold'>Profile Bank Associate Id:</label>
                <input type="number"  name='profileBankAssociateId' id='profileBankAssociateId' className=' w-100' value={bankobj.profileBankAssociateId ?? ""} onChange={bankData}/>
            </div>

            <div className=' col'>
                <label htmlFor="profileId" className='w-100 fw-bold'>Profile Id:</label>
                <input type="number"  name='profileId' id='profileId' className=' w-100' value={bankobj.profileId ?? ""} onChange={bankData}/>
            </div>

            <div className=' col'>
                <label htmlFor="bankAddress" className='w-100 fw-bold'>Bank Address:</label>
                <input type="text"  name='bankAddress' id='bankAddress' className=' w-100' value={bankobj.bankAddress ?? ""} onChange={bankData}/>
            </div>
          </div>

          <div className=' row mt-2'>
              <div className=' col'>
                <label htmlFor="bankInfo" className='w-100 fw-bold'>Bank Info:</label>
                <input type="text"  name='bankInfo' id='bankInfo' className=' w-100' value={bankobj.bankInfo ?? ""} onChange={bankData}/>
              </div>

              <div className=' col'>
                <label htmlFor="cardHolder" className='w-100 fw-bold'>Card Holder:</label>
                <input type="text"  name='cardHolder' id='cardHolder' className=' w-100' value={bankobj.cardHolder ?? ""} onChange={bankData}/>
              </div>

              <div className=' col'>
                <label htmlFor="cardType" className='w-100 fw-bold'>Card Type:</label>
                <input type="text"  name='cardType' id='cardType' className=' w-100' value={bankobj.cardType ?? ""} onChange={bankData}/>
              </div>
          </div>

          <div className=' row mt-2'>
              <div className=' col'>
                <label htmlFor="cardNo" className='w-100 fw-bold'>Card No:</label>
                <input type="number"  name='cardNo' id='cardNo' className=' w-100' value={bankobj.cardNo ?? ""} onChange={bankData}/>
              </div>

              <div className=' col'>
                <label htmlFor="tel" className='w-100 fw-bold'>Tel:</label>
                <input type="tel"  name='tel' id='tel' className=' w-100' value={bankobj.tel ?? ""} onChange={bankData}/>
              </div>
          </div>
        </form>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={SubmitData}>
          Submit
          </Button>
        </DialogActions>
      </BootstrapDialog>
      </div>
        


      <div>
        <table className='table table-hover table-bordered table-striped text-center mx-auto mt-1 w-75'>
          <thead className='table-dark'>
            <tr>
              <th>Id</th>
              <th>Display Name</th>
              <th>Address</th>
              <th>Birthdate</th>
              <th>Email</th>
              <th>Bank Detalis</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody className='table-light'>
            {
              state.profileApi?.map((x , i)=> {
                return(
                  <tr key={i}>
                  <td>{x.id}</td>
                  <td>{x.displayName}</td>
                  <td>{x.address}</td>
                  <td>{x.birthdate}</td>
                  <td>{x.email}</td>
                  <td>
                    <button onClick={() => ShowData(x)} style={{backgroundColor: "rgba(3, 128, 238, 0.378)"}}>View Bank Details</button>
                  </td>
                  <td>
                    <span onClick={()=>editid(x)} className=' text-primary px-2 mt-2' style={{cursor: "pointer" , textDecoration: "underline"}}>Edit</span>
                    <span onClick={()=>deleteId(x.id)} className=' text-danger px-2 mt-2' style={{cursor: "pointer" , textDecoration: "underline"}}>Delete</span>
                  </td>
                </tr>
                )
              })
            }
          </tbody>
        </table>
      </div>

      <Modal show={show} onHide={handleClosebank} backdrop="static" keyboard={false} style={{marginTop : "70px"}}>
        <Modal.Header closeButton>
          <Modal.Title>BANK DETAILS</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            {
              <Card style={{ width: '18rem' }} className='mx-auto shadow-lg'>
              <ListGroup variant="flush">
                <ListGroup.Item><b>ProfileBankAssociateId:</b> {bankDetailsshow?.data?.profileBankAssociateResponses[0].profileBankAssociateId}</ListGroup.Item>
                <ListGroup.Item><b>BankAddress:</b> {bankDetailsshow?.data?.profileBankAssociateResponses[0].bankAddress}</ListGroup.Item>
                <ListGroup.Item><b>BankInfo:</b> {bankDetailsshow?.data?.profileBankAssociateResponses[0].bankInfo}</ListGroup.Item>
                <ListGroup.Item><b>CardHolder:</b> {bankDetailsshow?.data?.profileBankAssociateResponses[0].cardHolder}</ListGroup.Item>
                <ListGroup.Item><b>CardNo:</b> {bankDetailsshow?.data?.profileBankAssociateResponses[0].cardNo}</ListGroup.Item>
                <ListGroup.Item><b>CardType:</b> {bankDetailsshow?.data?.profileBankAssociateResponses[0].cardType}</ListGroup.Item>
                <ListGroup.Item><b>Contact:</b> {bankDetailsshow?.data?.profileBankAssociateResponses[0].tel}</ListGroup.Item>
              </ListGroup>
            </Card>
            }
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClosebank}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      
    </>
  )
}

export default HOC(Profile)
