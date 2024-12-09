import { Component } from "@angular/core";
import { ItemExperiencias } from "./models/item-experiencias";
import { NgForOf } from "@angular/common";

@Component({
  selector: "app-experiencias",
  standalone: true,
  imports: [NgForOf],
  templateUrl: "./experiencias.component.html",
  styleUrl: "./experiencias.component.scss",
})
export class ExperienciasComponent {
  experiencias: ItemExperiencias[] = [
    {
      duracaoExperiencia: "Mar/2024 - Atualmente",
      imgUrl: "/logo-academia.png",
      alt: "Logo da Academia do Programador",
      titulo: "Desenvolvedor Trainee",
      descricao: `
        <p>
          Criação de aplicações robustas e escaláveis, utilizando metodologias
          ágeis e trabalhando em equipe para participar de todos os processos
          de desenvolvimento
        </p>

        <p>
          <span class="app-texto-principal fw-semibold">Stack:</span> .NET
          Framework, .NET 8, Entity Framework Core, ASP.NET Core MVC,
          ASP.NET Web API, MSTest, Docker, Angular.
        </p>
      `,
    },
    {
      duracaoExperiencia: "Fev/2024 - Atualmente",
      imgUrl: "/logo-IFSC.png",
      alt: "Logo do IFSC",
      titulo: "Bacharelado",
      descricao: `
        <p>
          O objetivo do Curso de Ciência da Computação é preparar profissionais 
          de nível superior capacitados a utilizar as modernas tecnologias da 
          área de informática e interagir com as demais áreas na orientação 
          sobre a melhor aplicação destas tecnologias. 
        </p>
      `,
    },
    {
      duracaoExperiencia: "Fev/2022 - Dez/2023",
      imgUrl: "/logo-IFSC.png",
      alt: "Logo do IFSC",
      titulo: "Curso técnico em Informática para a Internet",
      descricao: `
        <p>
          O objetivo do curso é formar profissionais habilitados e com competências 
          para atuar no ramo de desenvolvimento de sistemas para a Internet. Ao 
          longo das aulas, o aluno irá adquirir conhecimentos e habilidades associadas 
          à programação, banco de dados, configurações de sistemas, de hardware e 
          técnicas de teste e de suporte em software.
        </p>
        <p>
          <span class="app-texto-principal fw-semibold">Stack:</span> HTML, CSS, PHP, JavaScript,
        </p>
      `,
    },
    {
      duracaoExperiencia: "Fev/2021 - Dez/2023",
      imgUrl: "/logo-CEDUP.webp",
      alt: "Logo do CEDUP",
      titulo: "Curso técnico em Informática",
      descricao: `
        <p>
          <span class="app-texto-principal fw-semibold">Stack:</span> .NET
          Framework, .NET Core, Entity Framework Core, ASP.NET Core MVC,
          ASP.NET Web API, Angular.
        </p>
      `,
    },
  ];
}
