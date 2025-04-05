import { Component } from '@angular/core';

import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ContactComponent } from './components/contact/contact.component';
import { PotafolioComponent } from './components/potafolio/potafolio.component';
import { ThanksComponent } from "./components/thanks/thanks.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HomeComponent,
    AboutComponent,
    SkillsComponent,
    ContactComponent,
    PotafolioComponent,
    ThanksComponent
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = '<Erick />';

  items = [
    {
      id: 1,
      titulo: "Home",
      estatus: "active",
      href: "#home"
    },
    {
      id: 2,
      titulo: "Acerca de mi",
      estatus: "",
      href: "#about"
    },
    {
      id: 3,
      titulo: "Skills",
      estatus: "",
      href: "#skills"
    },
    {
      id: 4,
      titulo: "Portafolio",
      estatus: "",
      href: "#portafolio"
    },
    {
      id: 5,
      titulo: "Contacto",
      estatus: "",
      href: "#contact"
    },
  ]

  changeTheme() {
    if (document.documentElement.getAttribute('data-bs-theme') == 'dark') {
      document.documentElement.style.setProperty("--bs-body-bg", "#f8f9fa");
      document.documentElement.setAttribute('data-bs-theme', 'light')
    }
    else {
      document.documentElement.style.setProperty("--bs-body-bg", "#212529");
      document.documentElement.setAttribute('data-bs-theme', 'dark')
    }
    this.closeNav()
  }

  closeNav() {
    document.getElementById("navbarSupportedContent")?.classList.remove("show")
  }

}
