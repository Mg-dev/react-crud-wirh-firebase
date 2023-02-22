import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { useState, useEffect } from 'react';
import { db } from './firebase-config'
import { collection, getDocs } from 'firebase/firestore'
import { FaWindowClose } from 'react-icons/fa';

import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; 

function App() {
  const [users, setUsers] = useState([])
  const [isOpen, setIsOpen] = useState(false)
  const [loading, setLoading] = useState(true)
  
  const usersCollectionRef = collection(db, "users")
  
  useEffect(() => {
    try {
      setLoading(true)
      const getUsers = async() => {
        const data = await getDocs(usersCollectionRef)
        setUsers(data.docs.map((doc)=>({...doc.data(),id: doc.id})))
        setLoading(false)
      }
      setTimeout(() => {
        
        getUsers();
        
      }, 1000);
    } catch (error) {
      return error;
    }
    
  },[]);
  const togglePopup = () => {
    confirmAlert({
      customUI: ({ onClose }) => {
        
        return (
          <div className='custom-ui'>
            <div className="card bg-dark p-2 pb-3">
              <div>
                <FaWindowClose onClick={onClose} style={{color: "red",float: "right"}} />
              </div>
              <div className='card-title'>
                <h3 className='text-light text-center'>Creating Post</h3>
              </div>
            <form className='form-group'>
            <div className="form-group">
            <label  className="text-light">Name</label>
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Name"/>
           
          </div>
          <div className="form-group">
            <label  className="text-light">Age</label>
            <input type="number" className="form-control"  placeholder="Enter Your Age"/>
          </div>
          <button className='btn btn-sm mt-3 btn-light'>Create</button>
            </form>
            </div>
            
             
          </div>
        );
      }
    });
  }
  const handleDelete = (e) => {
    confirmAlert({
  customUI: ({ onClose }) => {
    
    return (
      <div className='custom-ui'>
        <h1>Are you sure?</h1>
        <p>You want to delete this file?</p>
        <button onClick={onClose} className='btn btn-sm btn-dark me-3'>No</button>
        <button
          onClick={() => {
            setUsers(users.filter((user) => user.id !== e.target.value))
            onClose();
          }}
          className='btn btn-sm btn-danger'
        >
          Yes, Delete it!
        </button>
      </div>
    );
  }
});
   
  }
 
  const handleEdit = (e) => {

  }
  return (
    <div  className=" App container">
      <div className='my-3 w-full d-flex justify-content-end'>
        <button onClick={togglePopup} className='btn btn-md btn-success'>Post Create</button>
        </div>
      <h1 className='d-block mb-5 mt-3 fs-1'>Firebase test</h1>
      
      {
        loading === false ?
        users.map(u=>(
          <div className=' card bg-dark mb-3 col-4 mx-auto' key={u.id}>
            <div className='card-body text-light'>
              <h3>{u.name}</h3>
              <h3>{u.age}</h3>
              <button value={u.id}  onClick={handleDelete} className='btn btn-sm btn-outline-danger me-3'>delete</button>
              <button value={u.id}  onClick={handleEdit} className='btn btn-sm btn-outline-light'>edit</button>
            </div>
          </div>
        )): <div>Loading...</div>
      }
      
      {/* {popup.show && (<Popup />)} */}
    </div>
  );
}

export default App;
