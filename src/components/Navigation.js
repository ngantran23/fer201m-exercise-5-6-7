import React from "react";
import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

export default function Navigation() {
    const { theme, toggle, dark } = useContext(ThemeContext);
    return (
        <div>
            <nav
                style={{
                    backgroundColor: theme.backgroundColor,
                    color: theme.color,
                    display: "flex",
                    justifyContent: "space-between",
                    borderBottom: "groove",
                }}
            >
                <ul className="heading" style={{backgroundColor: theme.backgroundColor}}>
                    <li>
                        <a
                            className="active heading__item"
                            href="#home"
                            style={{
                                backgroundColor: "#b1b801",
                                color: theme.color,
                                outline: "none",
                            }}
                        >
                            Home
                        </a>
                    </li>
                    <li>
                        <a
                            className="heading__item"
                            href="#news"
                            style={{
                                backgroundColor: theme.backgroundColor,
                                color: theme.color,
                                outline: "none",
                            }}
                        >
                            News
                        </a>
                    </li>
                    <li>
                        <a
                            className="heading__item"
                            href="#about"
                            style={{
                                backgroundColor: theme.backgroundColor,
                                color: theme.color,
                                outline: "none",
                            }}
                        >
                            About
                        </a>
                    </li>
                    <li>
                        <a
                            className="heading__item"
                            href="#contact"
                            style={{
                                backgroundColor: theme.backgroundColor,
                                color: theme.color,
                                outline: "none",
                            }}
                        >
                            Contact
                        </a>
                    </li>
                </ul>
                <div style={{ position: "relative", padding: 10 }}>
                    <a
                        className="switch-mode"
                        href="#"
                        onClick={toggle}
                        style={{
                            backgroundColor: theme.backgroundColor,
                            color: theme.color,
                            paddingRight: 40,
                            textDecoration: "none",
                        }}
                        data-testid="toggle-theme-btn"
                    >
                        <span>Switch Nav to {!dark ? "Dark" : "Light"} mode</span>
                    </a>
                </div>
            </nav>
        </div>
    );
}