import { Component, ViewChild } from '@angular/core';  
import { Router } from '@angular/router';  
import { CommonModule } from '@angular/common';  
import { FormsModule } from '@angular/forms';  
import { IonicModule } from '@ionic/angular';  
import { AuthService } from 'src/app/services/auth.service';  
import { showToast } from 'src/app/tools/message-routines';  
import { trigger, transition, style, animate } from '@angular/animations';  
import { LanguageComponent } from 'src/app/components/language/language.component';  
import { addIcons } from 'ionicons';  
import { colorWandOutline } from 'ionicons/icons';  
import { TranslateModule } from '@ngx-translate/core';  

@Component({  
  selector: 'app-ingreso',  
  templateUrl: './ingreso.page.html',  
  styleUrls: ['./ingreso.page.scss'],  
  standalone: true,  
  imports: [  
    CommonModule,  
    FormsModule,  
    IonicModule,  
    TranslateModule,  
    LanguageComponent   
  ],  
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
export class IngresoPage {  
  @ViewChild('selectLanguage') selectLanguage!: LanguageComponent;  

  correo = '';  
  password = '';  

  constructor(private authService: AuthService, private router: Router) {   
    this.correo = 'atorres';  
    this.password = '1234';  
    addIcons({ colorWandOutline });  
  }  

  ingresar() {  
    showToast('click boton ingresar');  
    this.authService.login(this.correo, this.password);  
  }  

  contrasena() {  
    this.router.navigate(['/correo']);  
  }  

  registro() {  
    this.router.navigate(['/registrarme']);  
  }  

  async ionViewWillEnter() {  
    this.selectLanguage.setCurrentLanguage();  
  }  

  navigateTheme() {  
    this.router.navigate(['/theme']);  
  }  

  login() {  
    this.authService.login(this.correo, this.password);  
  }  

  registerNewUser() {  
    // Lógica para registrar un nuevo usuario  
  }  

  passwordRecovery() {  
    this.router.navigate(['/correo']);  
  }  
}