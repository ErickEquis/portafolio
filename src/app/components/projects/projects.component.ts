import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {
  projects = [
    {
      title: 'Inventario CFE-TEIT',
      description: 'Plataforma diseñada para automatizar el control de inventarios de la compañía, permitiendo un seguimiento rápido y eficiente de las cantidades de producto y la generación de informes detallados.',
      tags: ['Angular', 'Node.js + Express', 'PostgreSQL'],
      link: 'https://inventario.cfeteit.gob.mx/'
    },
    {
      title: 'Herramienta de Gestión de Política TIC 2.0',
      description: 'Plataforma desarrollada para la detección de riesgos, el monitoreo del cumplimiento y la realización de auditorías federales, conforme a las normativas emitidas por las autoridades gubernamentales.',
      tags: ['Angular', 'Node.js + Express', 'PostgreSQL'],
      link: 'https://hgptic.presidencia.gob.mx/hgptic/'
    },
    {
      title: 'Sistema de Acreditación de Prensa de Presidencia',
      description: 'Plataforma diseñada para la gestión y control de asistentes en eventos organizados por el gobierno federal.',
      tags: ['Angular', 'Node.js + Express', 'PostgreSQL'],
      link: 'https://acreditaciones.comsoc.gob.mx/'
    },
    {
      title: 'Credibusiness',
      description: 'Plataforma enfocada en el comercio electrónico a crédito B2B.',
      tags: ['Angular', 'Node.js + Express', 'MySQL'],
      link: 'https://credibusiness.com/'
    }
  ];
}
