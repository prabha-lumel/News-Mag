
const Navbar = ({ setCategory }) => {
    return (
        <nav class="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
            <div class="container-fluid">
                <a class="navbar-brand" href="#"><span class="badge bg-light text-dark fs-4">NewsMag</span></a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">

                        <li class="nav-item">
                            <a class="nav-link" onClick={() => setCategory("technlogy")} href="#">Technlogy</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" onClick={() => setCategory("business")} href="#">Business</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" onClick={() => setCategory("health")} href="#">Health</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" onClick={() => setCategory("science")} href="#">Science</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" onClick={() => setCategory("sports")} href="#">Sports</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" onClick={() => setCategory("entertainment")} href="#">Entertainment</a>
                        </li>
                    </ul>
                    <form class="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>
                </div>
            </div>
        </nav>
    )
}

export default Navbar