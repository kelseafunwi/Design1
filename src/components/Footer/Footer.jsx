import { Col, Row } from 'react-bootstrap';
import './Footer.css';
import copyrightIcon from '../../assets/img/copyrighticon.svg';

export const Footer = () => {
    return (
        <footer className="footer" >
            <Row >
                <Col md={12}>
                    <div className="d-flex align-items-center">
                        <p><img src={copyrightIcon} alt="Copyright icon" />2023 | Designed and coded with ❤️️ by Sagar Shah</p>
                    </div>
                </Col>
            </Row>
        </footer>
    )
}