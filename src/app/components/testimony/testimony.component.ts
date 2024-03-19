import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-testimony',
  standalone: true,
  imports: [MatIconModule, MatButtonModule],
  templateUrl: './testimony.component.html',
  styleUrl: './testimony.component.scss'
})
export class TestimonyComponent {

  austinTextEn = 'From the first day on the job, Arturo has been an asset to the team. He brings a strong skill set in front-end development, including a deep understanding of HTML, CSS, JavaScript, and related technologies. His ability to translate designs into pixel-perfect code is second to none, and he consistently delivered high-quality work on time. <br><br>One of his key strengths is his collaborative nature. He is always willing to work with other team members to solve complex problems and provide feedback to ensure that the end product meets both the design and functional requirements. His willingness to learn and grow is impressive, and he is always looking for new ways to improve his skills and expand his knowledge. <br><br>I am extremely impressed with his work. His talent, professionalism, and commitment to excellence have made him an invaluable member of the team. I have no doubt that he will continue to excel in his work and achieve great things in his career.'

  austinTextEs = 'Desde el primer día de trabajo, Arturo ha sido un activo para el equipo. Aporta un sólido conjunto de habilidades en desarrollo front-end, incluido un profundo conocimiento de HTML, CSS, JavaScript y tecnologías relacionadas. Su capacidad para traducir diseños en código con píxeles perfectos es insuperable y constantemente entregó trabajos de alta calidad a tiempo. <br><br> Una de sus principales fortalezas es su carácter colaborativo. Siempre está dispuesto a trabajar con otros miembros del equipo para resolver problemas complejos y brindar comentarios para garantizar que el producto final cumpla con los requisitos funcionales y de diseño. Su voluntad de aprender y crecer es impresionante y siempre está buscando nuevas formas de mejorar sus habilidades y ampliar su conocimiento sobre él. <br><br> Estoy muy impresionado con su trabajo. Su talento, profesionalismo y compromiso con la excelencia lo han convertido en un miembro invaluable del equipo. No tengo dudas de que seguirá sobresaliendo en su trabajo y logrará grandes cosas en su carrera.'

  sebTextEn = "I have the pleasure of working with Arturo, whose expertise in Angular, Python, and Django significantly contributes to our project's success. Not only does he bring a very large dose of technical knowledge, but his leadership and problem-solving abilities are outstanding. Arturo's clear and structured communication ensures smooth project progress and his can-do attitude inspires our team to strive for excellence. He's an invaluable asset, always ready to lend a hand and guide others. I highly recommend Arturo for any team looking to elevate their tech capabilities and foster a collaborative working environment."

  sebTextEs = "Tengo el placer de trabajar con Arturo, cuya experiencia en Angular, Python y Django contribuye significativamente al éxito de nuestro proyecto. No sólo aporta una gran dosis de conocimiento técnico, sino que su liderazgo y su capacidad de resolución de problemas son sobresalientes. La comunicación clara y estructurada de Arturo garantiza un progreso fluido del proyecto y su actitud positiva inspira a nuestro equipo a esforzarse por alcanzar la excelencia. Es un activo invaluable, siempre dispuesto a echar una mano y guiar a los demás. Recomiendo ampliamente a Arturo para cualquier equipo que busque elevar sus capacidades tecnológicas y fomentar un entorno de trabajo colaborativo."

  translateText = false

}
