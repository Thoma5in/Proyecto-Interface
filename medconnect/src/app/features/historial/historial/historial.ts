import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-historial',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './historial.html',
  styleUrls: ['./historial.scss'],
})
export class Historial {
    // Datos quemados (luego los puedes conectar a la base de datos)
  nombre = "Samuel Urbano Millan";
  cedula = "1108642121";
  registro = "123";

  motivoConsulta = `Paciente masculino de 28 años que consulta por dolor 
  torácico intermitente de 3 semanas de evolución, tipo opresivo, intensidad 
  5/10, que aparece principalmente durante el ejercicio moderado y cede con 
  el reposo. Refiere episodios de taquicardia y disnea leve asociados, sin 
  irradiación al miembro superior ni mandíbula. Niega fiebre, tos productiva 
  o pérdida de peso. Antecedentes personales de asma leve controlada, sin 
  hospitalizaciones recientes. Antecedentes familiares de enfermedad 
  cardiovascular en padre (HTA). Medicación ocasional: ibuprofeno a demanda. 
  Busca evaluación clínica y orientación diagnóstica para descartar causa 
  cardiológica y recibir recomendaciones de manejo.`

}
