export default function AuthExample () {
    return (
        <Router>
            <div>
                <ul>
                    <li><Link to="/public">Public Page</Link></li>
                    <li><Link to="/protected">Protected Page</Link></li>
                </ul>
                <Route path="/public" component={Public}/>
                <Route path="/login" component={Login}/>
            </div>
        </Router>
    )
}
