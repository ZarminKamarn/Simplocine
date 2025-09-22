import { NavBar } from "./nav/NavBar";
import { Title } from "./title/Title";
import "./header.css";

export function Header(){
    return(
        <header className="header">
            <Title />
            <NavBar />
        </header>
    );
}