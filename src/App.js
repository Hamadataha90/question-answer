import React, { useState } from 'react';
import { Container, Row, Button } from 'react-bootstrap';
import FormInput from './components/FormInput';
import QuestionList from './components/QuestionList';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  // Function to display notifications based on type
  const notify = (message, type) => {
    if (type === "error") {
      toast.error(message);
    } else {
      toast.success(message);
    }
  };

  // Initialize state with data from localStorage if available
  const [data, setData] = useState(() => {
    const savedItems = localStorage.getItem("items");
    return savedItems ? JSON.parse(savedItems) : [];
  });

  // Function to add a new item
  const addItem = (newItem) => {
    const newData = [newItem, ...data];
    setData(newData);
    localStorage.setItem("items", JSON.stringify(newData));
    notify("تم إضافة السؤال بنجاح", "success"); // Notification for successful addition
  };

  // Function to delete all items
  const deleteAll = () => {
    localStorage.removeItem("items");
    setData([]);
    notify("تم حذف جميع الأسئلة", "success"); // Notification for deleting all items
  };

  // Function to delete a single item by ID
  const deleteOne = (id) => {
    const newData = data.filter((item) => item.id !== id);
    setData(newData);
    localStorage.setItem("items", JSON.stringify(newData));
    notify("تم حذف السؤال بنجاح", "success"); // Notification for successful deletion
  };

  return (
    <div className='app'>
      <h1 className="text-center fs-3 mt-5 mb-5">أسألة وأجوبة عشوائية  </h1>

      <Container className='app-container p-5'>
        <Row className='justify-content-center'> 
          <FormInput onAdd={addItem} notify={notify} />
          <QuestionList data={data} deleteOne={deleteOne} />
          {data.length >= 1 && (
            <Button onClick={deleteAll} variant='danger' className='mt-5'>
             مسح الكل 
            </Button>
          )}
        </Row>
      </Container>

      {/* ToastContainer to display notifications */}
      <ToastContainer 
        position="top-right" 
        autoClose={3000} 
        hideProgressBar={false} 
        newestOnTop={false} 
        closeOnClick 
        rtl={false} 
        pauseOnFocusLoss 
        draggable 
        pauseOnHover
      />
    </div>
  );
};

export default App;
