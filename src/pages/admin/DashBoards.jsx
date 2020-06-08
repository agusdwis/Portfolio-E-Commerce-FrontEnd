import React, {Fragment} from "react";
import '../../assets/styles/admin/dashboard.css';

class AdminDasboard extends React.Component {
    render() {
        return (
            <Fragment>

                <nav className="navbar navbar-dark bg-dark">
                    <a className="navbar-brand" href="."><b>ADMIN DASHBOARD</b></a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"/>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav">
                            <li className="nav-item active">
                                <a className="nav-link" href=".">Home <span className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href=".">Books</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href=".">User</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href=".">Transaction</a>
                            </li>
                        </ul>
                    </div>
                </nav>


                <div className="container">

                </div>

            </Fragment>
        );
    }
}

export default AdminDasboard;