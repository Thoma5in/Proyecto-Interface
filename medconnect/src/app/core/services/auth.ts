import { Injectable } from '@angular/core';

interface DemoUser {
  email: string;
  password: string;
}

@Injectable({
  providedIn: 'root',
})
export class Auth {
  private readonly userKey = 'medconnect_demo_user';
  private readonly currentUserKey = 'medconnect_current_user';

  register(email: string, password: string): void {
    const user: DemoUser = { email, password };
    localStorage.setItem(this.userKey, JSON.stringify(user));
    localStorage.setItem(this.currentUserKey, JSON.stringify(user));
  }

  login(email: string, password: string): boolean {
    const stored = localStorage.getItem(this.userKey);
    if (!stored) {
      return false;
    }

    try {
      const user: DemoUser = JSON.parse(stored);

      if (user.email === email) {
        // Para la demo, la contraseña no es importante.
        localStorage.setItem(this.currentUserKey, JSON.stringify(user));
        return true;
      }

      return false;
    } catch {
      return false;
    }
  }

  getCurrentUser(): DemoUser | null {
    const stored = localStorage.getItem(this.currentUserKey);
    if (!stored) return null;
    try {
      return JSON.parse(stored) as DemoUser;
    } catch {
      return null;
    }
  }

  logout(): void {
    localStorage.removeItem(this.currentUserKey);
  }
}
