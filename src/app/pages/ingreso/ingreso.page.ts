import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';
import { showToast } from 'src/app/tools/message-routines';
import { trigger, transition, style, animate } from '@angular/animations';
import { LanguageComponent } from 'src/app/components/language/language.component';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-ingreso',
  templateUrl: './ingreso.page.html',
  styleUrls: ['./ingreso.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, TranslateModule , LanguageComponent],
  animations: [
    trigger('slideInOut', [
      transition(':enter', [
        style({ transform: 'translateX(-100%)' }),
        animate('500ms ease-out', style({ transform: 'translateX(0%)' }))
      ]),
      transition(':leave', [
        animate('500ms ease-out', style({ transform: 'translateX(100%)' }))
      ])
    ])
  ]
})
export class IngresoPage implements OnInit {
  @ViewChild('selectLanguage') selectLanguage!: LanguageComponent;

  correo = '';
  password = '';

  constructor(private authService: AuthService, private router: Router
    , private translate: TranslateService) { }

  ngOnInit() {
  }

  ingresar() {
    showToast('click boton ingresar')
    this.authService.login(this.correo, this.password);
  }

  contrasena(){
    this.router.navigate(['/correo']);
    
  }

  registro(){
    this.router.navigate(['/registrarme']);
  }
  navigateTheme() {
    this.router.navigate(['/ingresar']);
  }
  
}
