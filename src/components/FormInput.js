import { useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';

const FormInput = ({ onAdd, notify }) => {
  const [questionText, setQuestionText] = useState('');
  const [answerText, setAnswerText] = useState('');

  const handleSubmit = (e) => {
    
    e.preventDefault();
    const newItem = {
      id: Math.random(),
      question: questionText,
      answer: answerText,
    };
    if (questionText === '' || answerText === '') {
      notify('من فضلك املأ كلا الحقلين', 'error');
      return;
    }
    onAdd(newItem);
    setQuestionText('');
    setAnswerText('');
  };

  return (
    <Form onSubmit={handleSubmit} id='form'>
      <Row>
        <Col className='mb-3' md={5}>
          <Form.Control
            value={questionText}
            onChange={(e) => setQuestionText(e.target.value)}
            type="text"
            placeholder="أدخل السؤال"
          />
        </Col>
        <Col className='mb-3' md={5}>
          <Form.Control
            value={answerText}
            onChange={(e) => setAnswerText(e.target.value)}
            type="text"
            placeholder="أدخل الإجابة"
          />
        </Col>
        <Col className='mb-3' md={2}>
          <button className='w-100 btn btn-success' type="submit">
            إضافة
          </button>
        </Col>
      </Row>
    </Form>
  );
};

export default FormInput;
