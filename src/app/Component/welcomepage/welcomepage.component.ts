import { Component, ViewChild, ViewContainerRef,OnInit,OnDestroy } from '@angular/core';
import { AuthService } from 'src/app/Service/auth.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-welcomepage',
  templateUrl: './welcomepage.component.html',
  styleUrls: ['./welcomepage.component.css']
})
export class WelcomepageComponent  implements OnInit, OnDestroy {
  isLoggedIn = false;
  isDropdownVisible: boolean = false;
  showUsefulLinks: boolean = false;
  showApps: boolean = false;
  showAboutUs: boolean = false;
  isHomeActive = false;


  private authStatusSub: Subscription | undefined;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    // Subscribe to AuthService to track login status
    this.authStatusSub = this.authService.loggedInStatus$.subscribe(status => {
      this.isLoggedIn = status;  
    });

    // Initialize login state when the page loads
    this.isLoggedIn = this.authService.getIsLoggedIn();
  }

  toggleUsefulLinks() {
    if (this.showUsefulLinks) {
        this.closeAll();
    } else {
        this.closeAll();
        this.showUsefulLinks = true;
    }
}

toggleApps() {
    if (this.showApps) {
        this.closeAll();
    } else {
        this.closeAll();
        this.showApps = true;
    }
}

toggleAboutUs() {
    if (this.showAboutUs) {
        this.closeAll();
    } else {
        this.closeAll();
        this.showAboutUs = true;
    }
}

closeAll() {
    this.showUsefulLinks = false;
    this.showApps = false;
    this.showAboutUs = false;
    this.isHomeActive = false;

}



  preventLogout(): void {
    this.isLoggedIn = this.authService.getIsLoggedIn(); // Ensure state is not lost
  }
  ngOnDestroy(): void {
    if (this.authStatusSub) {
      this.authStatusSub.unsubscribe();
    }
  }

  toggleLoginLogout(): void {
    if (this.isLoggedIn) {
      console.log('Logging out');
      this.authService.logout();
      // this.router.navigate(['/']); 
    } else {
      console.log('Redirecting to login page');
      this.router.navigate(['/Login']);
    }
  }

  // Toggle dropdown visibility
  toggleDropdown() {
    this.isDropdownVisible = !this.isDropdownVisible;
  }

  
  toggleHome() {
    if (this.isHomeActive) {
        this.closeAll();
    } else {
        this.closeAll();
        this.isHomeActive = true;
        this.router.navigate(['/page']);
    }
}

}