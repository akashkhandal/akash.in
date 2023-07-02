import { AfterViewInit, Component, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements AfterViewInit {
  constructor(private renderer: Renderer2) {}
  // const target: string
  ngAfterViewInit(): void {
    // Handle $(window).load() code
    this.renderer.listen('window', 'load', () => {
      const preloader = document.getElementById('preloader');
      if (preloader) {
        this.fadeOutAndRemove(preloader);
      }
    });

    // Handle 'a.page-scroll' click event
  // Handle 'a.page-scroll' click event
// const pageScrollLinks = document.querySelectorAll('a.page-scroll');
// if (pageScrollLinks) {
//   pageScrollLinks.forEach((link) => {
//     this.renderer.listen(link, 'click', (event) => {
//       event.preventDefault();
//       const $anchor = $(link);
//       const target = $anchor.attr('href');
//       if (target !== undefined) { // Check if target is not undefined
//         $('html, body').stop().animate({
//           scrollTop: $(target).offset().top
//         }, 1500, 'easeInOutExpo');
//       }
//     });
//   });
// }



    // Handle menu button click event
    const openBtn = document.getElementById('open-button');
    const closeBtn = document.getElementById('close-button');
    if (openBtn && closeBtn) {
      this.renderer.listen(openBtn, 'click', () => this.toggleMenu());
      this.renderer.listen(closeBtn, 'click', () => this.toggleMenu());
    }
  }

   fadeOutAndRemove(element: HTMLElement): void {
    element.style.opacity = '1';

    const fadeEffect = setInterval(() => {
      if (element.style.opacity > '0') {
        element.style.opacity = (parseFloat(element.style.opacity) - 0.1).toString();
      } else {
        clearInterval(fadeEffect);
        element.remove();
      }
    }, 100);
  }

 toggleMenu(): void {
    const bodyEl = document.body;
    const isOpen = bodyEl.classList.contains('show-menu');

    if (isOpen) {
      bodyEl.classList.remove('show-menu');
    } else {
      bodyEl.classList.add('show-menu');
    }
  }


  openButton(){
    console.log("hello");
    
  }



  showMenu: boolean = false;
  currentSection: string = 'home';

  showSection(section: string) {
    this.currentSection = section;
  }
 
  scrollToSection(sectionId: string) {
    var section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  }

}
