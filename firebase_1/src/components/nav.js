function Nav() {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light">
            <div class="container">
                <a class="navbar-brand" href="#">Math Academy</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav ms-auto">
                        <li class="nav-item"><a class="nav-link" href="exercises.html">Exercises</a></li>
                        <li class="nav-item"><a class="nav-link" href="step-by-step-lessons.html">Lessons</a></li>
                        <li class="nav-item"><a class="nav-link" href="interactive.html">Calculator</a></li>
                        <li class="nav-item"><a class="nav-link" href="pagine.html">Resources</a></li>
                        <li class="nav-item"><a class="nav-link" href="login.html">Login</a></li>
                    </ul>
                </div>
            </div>
        </nav>
        </div>
    )
}

export default Nav;
