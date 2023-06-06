import React from "react";

function Navigation() {
    return (
        <div>
            <nav>
                <ul className="heading">
                    <li>
                        <a className="active heading__item" href="#home">
                            Home
                        </a>
                    </li>
                    <li>
                        <a className="heading__item" href="#news">
                            News
                        </a>
                    </li>
                    <li>
                        <a className="heading__item" href="#about">
                            About
                        </a>
                    </li>
                    <li>
                        <a className="heading__item" href="#contact">
                            Contact
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default Navigation;
