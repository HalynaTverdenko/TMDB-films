import {useState, useEffect} from 'react';
import './App.css';
import Movie from './Movie';
import Favourite from './Favourite';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Container, Form, FormControl, Nav, Navbar } from 'react-bootstrap';


const API_URL="https://api.themoviedb.org/3/movie/popular?api_key=53c258bb52d305146e19a71e58aa2cc5"
const API_SEARCH="https://api.themoviedb.org/3/search/movie?api_key=53c258bb52d305146e19a71e58aa2cc5&query"

function App() {
 const [movies, setMovies] = useState([]);
 const [query, setQuery] = useState('');
 
 useEffect(() => {
    fetch(API_URL)
    .then((res) => res.json())
    .then(data => {
        console.log(data)
        setMovies(data.results)
    })
 }, [])


 const searchMovie = async(e) => {
    e.preventDefault();
    console.log('Searching by title');
    try{
        const url=`https://api.themoviedb.org/3/search/movie?api_key=53c258bb52d305146e19a71e58aa2cc5&query=${query}`;
        const res = await fetch(url);
        const data = await res.json();
        console.log(data);
        setMovies(data.results);

    }
    catch (e) {
        console.log(e)
    }

    
    }
    const changeHandler =(e) => {
        setQuery(e.target.value)

    
 }

//  const addToFav = JSON.parse(localStorage.getFavFilms('favFilms'))
//  const [favFilms, setFavFilms] = useState(addToFav)
//  useEffect(() => {
//     localStorage.setFavFilms('favFilms', JSON.stringify(favFilms))
//     const addToFav = JSON.parse(localStorage.getFavFilms('favFilms'))
//     console.log(addToFav)
//  }, [favFilms])


 // const addToFav = (e) => {
    // e.preventDefault();
    // console.log('Add to fauvorite');
    //     movieReq.id(e.target.value)
    // }
 return (

    <>
    <Navbar bg="dark" expand="lg" variant="dark">
        <Container fluid>
            <Navbar.Brand href="/home">The Movie DB Search App</Navbar.Brand>
            <Navbar.Brand href="/home">Popular movies</Navbar.Brand>
            <Navbar.Brand a href="/favourite">Favourite movies</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll"></Navbar.Toggle>

                <Navbar.Collapse id="navbarScroll">
                    <Nav 
                    className='me-auto my-2 my-lg-3' 
                    style={{maxHeight: '100px'}} 
                    navbarScroll></Nav>

                    <Form className='d-flex' onSubmit={searchMovie}>
                        <FormControl
                        type="search"
                        placeholder="Search by movie title"
                        className="me-2"
                        aria-label="search"
                        name="query"
                        value={query} onChange={changeHandler}></FormControl>
                        <Button variant="secondary" type="submit">Search</Button>
                    </Form>
                </Navbar.Collapse>  
        </Container>
    </Navbar>
    <div>
        {movies.length > 0 ? (

        <div className='container'>
            <div className='grid'>
                {movies.map((movieReq) =>
                <Movie key={movieReq.id} {...movieReq} />)}
                {/* <Button variant='secondary' type="add" setFavFilms={setFavFilms} >Add to favourite</Button> */}
            </div>
        </div>
        ):(
            <h2>Sorry, no movies found</h2>
        )}
    </div>
    </>   
 );
}

export default App;