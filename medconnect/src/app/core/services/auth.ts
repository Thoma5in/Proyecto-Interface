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

  private hasLocalStorage(): boolean {
    return typeof window !== 'undefined' && typeof window.localStorage !== 'undefined';
  }

  register(email: string, password: string): void {
    if (!this.hasLocalStorage()) {
      return;
    }
    const user: DemoUser = { email, password };
    localStorage.setItem(this.userKey, JSON.stringify(user));
    localStorage.setItem(this.currentUserKey, JSON.stringify(user));
  }

  login(email: string, password: string): boolean {
    if (!this.hasLocalStorage()) {
      return false;
    }
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
    if (!this.hasLocalStorage()) {
      return null;
    }
    const stored = localStorage.getItem(this.currentUserKey);
    if (!stored) return null;
    try {
      return JSON.parse(stored) as DemoUser;
    } catch {
      return null;
    }
  }

  logout(): void {
    if (!this.hasLocalStorage()) {
      return;
    }
    localStorage.removeItem(this.currentUserKey);
  }
}
