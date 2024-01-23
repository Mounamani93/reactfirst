import Carousel from 'react-bootstrap/Carousel';
import { Col, Container, Row } from 'react-bootstrap'
function SliderHome() {
    return (
        <Container fluid className='w-100 justify-content-center p-0'>
            <Row className='w-100 m-0'>
                <Col md="12" className='p-0'>
                    <Carousel interval={null}>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="https://smallbizclub.com/wp-content/uploads/2021/10/bigstock-Banner-Software-Ui-And-Develop-419916445.jpg"
                                alt="First slide"
                            />
                            <Carousel.Caption>
                                <h5>First slide label</h5>
                                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="https://smallbizclub.com/wp-content/uploads/2021/10/bigstock-Banner-Software-Ui-And-Develop-419916445.jpg"
                                alt="Second slide"
                            />
                            <Carousel.Caption>
                                <h5>Second slide label</h5>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="https://smallbizclub.com/wp-content/uploads/2021/10/bigstock-Banner-Software-Ui-And-Develop-419916445.jpg"
                                alt="Third slide"
                            />
                            <Carousel.Caption>
                                <h5>Third slide label</h5>
                                <p>
                                    Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                                </p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </Col>
            </Row>
        </Container>
    );
}

export default SliderHome;