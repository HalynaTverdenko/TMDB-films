import {Modal, show, Button} from 'react-bootstrap';
import { useState } from "react";

const API_IMG="https://image.tmdb.org/t/p/w500/";

const Movie = ({title, poster_path, vote_average, overview}) => {

    const [show, setShow] = useState(false);

    const handleShow =() => setShow(true);
    const handleClose= () => setShow(false); 

    return (
        <div className="card text-center bg-secondary mb-3">
            <div className="card-body">
                <img className="card-img-top" src={API_IMG+poster_path} />
                <div className="card-body">
                    <button type="button" className="btn btn-dark" onClick={handleShow}>View movie</button>
                    <Modal show={show} onHide={handleClose}>
                        <Modal.Header closeButton>
                            <Modal.Title></Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <img className="card-img-top" style={{width: '14rem'}} src={API_IMG+poster_path}></img>
                            <h3>{title}</h3>
                            <h4>ImDb: {vote_average}</h4>
                            <br />
                            <h5>Overview</h5>
                            <p>{overview}</p>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose}>Close</Button>
                        </Modal.Footer>
                    </Modal>
                </div>

            </div>
        </div>
    )
}
export default Movie;