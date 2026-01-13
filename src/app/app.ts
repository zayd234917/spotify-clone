import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SideBar } from "./components/side-bar/side-bar";
import { Footer } from "./components/footer/footer";
import { Home } from "./pages/home/home";
import { Header } from "./components/header/header";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SideBar, Footer, Home, Header],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('spotify-clone');
}
