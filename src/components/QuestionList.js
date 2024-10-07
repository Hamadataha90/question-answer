import { Button, Row } from 'react-bootstrap';
import Accordion from 'react-bootstrap/Accordion';

function QuestionList({ data, deleteOne }) {
  return (
    <Row>
      <Accordion defaultActiveKey="0">
        {
          data && data.length > 0 ? (
            data.map((item) => (
              <Accordion.Item eventKey={item.id.toString()} key={item.id}>
                <Accordion.Header>
                  <div className='m-auto'>{item.question}</div>
                </Accordion.Header>
                <Accordion.Body>
                  <div className='text-center d-flex justify-content-between'>
                    <span>{item.answer}</span>
                    <div>
                      <Button variant='danger' onClick={() => deleteOne(item.id)}> حذف </Button>
                    </div>
                  </div>
                </Accordion.Body>
              </Accordion.Item>
            ))
          ) : (
            <h2 className='text-center fs-4 p-5'>لا يوجد أسئلة الآن</h2>
          )
        }
      </Accordion>
    </Row>
  );
}

export default QuestionList;
