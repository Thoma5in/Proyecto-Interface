import { Injectable } from '@angular/core';

export interface CitaAgendada {
  id: number;
  paciente: string;
  doctor: string;
  especialidad: string;
  fecha: string;
}

@Injectable({
  providedIn: 'root',
})
export class CitasAgendadasService {
  private readonly storageKey = 'medconnect_citas_agendadas';

  private hasLocalStorage(): boolean {
    return typeof window !== 'undefined' && typeof window.localStorage !== 'undefined';
  }

  private readAll(): CitaAgendada[] {
    if (!this.hasLocalStorage()) {
      return [];
    }
    const raw = localStorage.getItem(this.storageKey);
    if (!raw) return [];
    try {
      return JSON.parse(raw) as CitaAgendada[];
    } catch {
      return [];
    }
  }

  private writeAll(citas: CitaAgendada[]): void {
    if (!this.hasLocalStorage()) {
      return;
    }
    localStorage.setItem(this.storageKey, JSON.stringify(citas));
  }

  obtenerCitas(): CitaAgendada[] {
    return this.readAll();
  }

  agregarCita(parcial: Omit<CitaAgendada, 'id'>): void {
    const actuales = this.readAll();
    const nuevoId = actuales.length ? Math.max(...actuales.map(c => c.id)) + 1 : 1;
    const nueva: CitaAgendada = { id: nuevoId, ...parcial };
    this.writeAll([...actuales, nueva]);
  }
}
